import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

class LoadingScreen extends Component {

    componentDidMount() {
        this.checkLogIn();
    }

    checkLogIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('Map')
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default LoadingScreen;
