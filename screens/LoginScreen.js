
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Colors, Fonts, Borders } from '../constans/Base';
import styled from 'styled-components';
import SocialButton from '../components/SocialButton';
import Logo from '../components/Logo';
import FacebookIcon from '../components/Facebook';
import GmailIcon from '../components/Gmail';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

const screenWidth = Math.round(Dimensions.get('window').width)
const horizontalMargin = (screenWidth - 270) / 2

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
                console.log('User already signed-in Firebase.');
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
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
            <Container>

                <View style={styles.container}>
                    <Image source={require('../assets/loginBg.png')} style={styles.backgroundImage} />
                    <Logo />
                    <SocialButton
                        onPress={this.signInWithGoogleAsync}
                        text="Continue with Google"
                        textColor={'#FFFFFF;'}
                        backgroundColor={Colors.mainTint}
                        border={Borders.secondary}
                        fontSize={Fonts.lg} />
                    <GmailIcon />
                    <SocialButton
                        text="Continue with Facebook"
                        textColor={Colors.black}
                        backgroundColor={'transparent'}
                        border={Borders.primary} />
                    <FacebookIcon />
                </View>
            </Container>
        )
    }
}

const Container = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

const styles = StyleSheet.create({
    container: {
        marginBottom: 55,
        // marginHorizontal: horizontalMargin
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: -17,
        resizeMode: 'cover',
        zIndex: -1,
    },
});
