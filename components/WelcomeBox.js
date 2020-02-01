import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import LaunchCheck from '../database/LaunchCheck'

import xclose from '../assets/xclose.png'

const WelcomeBox = () => {

    const [dismiss, setDismiss] = useState(false)
    
    const dismissBox = () => {
        setDismiss(true)
    }

    const checkStorage = async () => {
        const check = await AsyncStorage.getItem('first-launch')
        if (check !== null){
            setDismiss(true)
        }
    }

    const setStorage = () => {
        AsyncStorage.setItem('first-launch', 'true')
    }

    useEffect(()=> {
        checkStorage()
    },[])
    
    return firstLaunch ?
    <View style={dismiss ? styles.none : styles.welcomebox}>
        <TouchableOpacity onPress={dismissBox} style={{paddingHorizontal: 20}}><Image source={xclose} style={styles.close} /></TouchableOpacity>
        <Text style={styles.textbox}>
        Welcome to cupp-a, 
        Made to explore and learn about the sustainability of Antwerp coffee venues. 
        </Text>
    </View> :
    null
}

const styles = StyleSheet.create({
    welcomebox: {
        position: 'relative',
        marginTop: '50%',
        height: 260,
        width: '80%',
        marginHorizontal: '10%',
        padding: 30,
        paddingTop: 10,
        paddingVertical: 'auto',
        backgroundColor: '#EAE8DB',
        borderRadius: 35,
        transform: [
            {translateY: '-50%'}
        ]
    },
    textbox: {
        marginTop: 10,
        width: '100%',
        height: 160,
        backgroundColor: '#FFF',
        padding: 10,
        textAlign: 'center',
        paddingTop: 50,
        color: '#784D4D'
    },
    close : {
        alignSelf: 'flex-end',
    },
    none: {
        display: 'none'
    }
})

export default WelcomeBox
