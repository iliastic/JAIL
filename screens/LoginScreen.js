
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { Colors, Fonts, Borders } from '../constans/Base';
import Logo from '../components/Logo';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import normalize from 'react-native-normalize';

import userbg from '../assets/loginBg.png'

export default class Loginscreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            let providerData = firebaseUser.providerData;
            for (let i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        let unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                let credential = firebase.auth.GoogleAuthProvider.credential(
                    // googleUser.getAuthResponse().id_token);
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential)
                    .then(() => {
                        console.log('User Signed In!');
                    })
                    .catch(error => {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        // The email of the user's account used.
                        let email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        let credential = error.credential;
                        console.log('Error:' + errorCode + "," + errorMessage + "," + email + "," + credential)
                        // ...
                    });
            } else {
                this.props.navigation.navigate('Loading');
                console.log('User already signed-in Firebase.');
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
                androidClientId: '430651409692-bh0gogut914rjn5ffc5sdlvs4qg8aftg.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                this.onSignIn(result);
                this.props.navigation.navigate('Loading');
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo style={{flex: 1}}/>
                <SocialIcon
                    title='Sign in with google'
                    onPress={() => (this.signInWithGoogleAsync())}
                    button
                    light
                    type='google'
                    style={styles.button}
                />
                <Image source={userbg} style={styles.background} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    button: {
        zIndex: 20,
        marginBottom: normalize(200),
        width: normalize(250)
    }
});
