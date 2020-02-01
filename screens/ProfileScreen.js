import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'

import userbg from '../assets/userbg.png'
import ALogo from '../assets/ALogo.png'
import AMSlogo from '../assets/AMSlogo.png'

const ProfileScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcometext}>Hi,{'\n'} Coffee Lover ! </Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('DevInfo')}}>
                <View style={[styles.button, {backgroundColor: 'rgba(250, 144, 95, 0.6)'}]}>
                    <View style={styles.btnimage}>
                        <Image source={ALogo} style={{alignSelf: 'flex-end', marginRight: 'auto'}}/>
                        <View style={styles.textcontainer}>
                            <Text style={styles.btntext}>About</Text>
                            <Text style={styles.btntext}>Cupp-A</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
<<<<<<< HEAD
            <TouchableOpacity onPress={handleEmail}>
                <View style={[styles.button, {backgroundColor: 'rgba(209, 163, 142, 0.6)'}]}>
=======
            <TouchableOpacity>
                <View style={[styles.button, {backgroundColor: '#D1A38E'}]}>
>>>>>>> 5799e296bc54674d8a9820ed138f3e700dec12a8
                    <View style={styles.btnimage}>
                        <Image source={AMSlogo} style={{alignSelf: 'flex-end', marginRight: 'auto', marginLeft: 10, height: 60, width: 160}}/>
                        <View style={styles.textcontainer}>
                            <Text style={styles.btntext}>Contact</Text>
                            <Text style={styles.btntext}>AMS</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Image source={userbg} style={styles.background} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingTop: '20%'
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    button: {
        width: '90%',
        marginHorizontal: 'auto',
        marginVertical: '8%',
        height: (Dimensions.get('screen').height / 100) * 20,
        borderRadius: 30
    },
    welcometext: {
        fontSize: 35,
        marginBottom: '5%'
    },
    btnimage: {
        height: (Dimensions.get('screen').height / 100) * 20,
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10
    },
    btntext: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'right',
        paddingRight: 15
    },
    textcontainer: {
        marginLeft: '15%',
        alignSelf: 'flex-end',
        marginBottom: 10
    }
})

export default ProfileScreen