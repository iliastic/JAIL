import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native'

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

    return (
    <View style={dismiss ? styles.none : styles.welcomebox}>
        <TouchableOpacity onPress={()=> {
            dismissBox()
            setStorage()
        }} style={{width: '100%'}}><Image source={xclose} style={styles.close} /></TouchableOpacity>
        <Text style={styles.textbox}>
            Welcome to cupp-a, 
            Made to explore and learn about the sustainability of Antwerp coffee venues. 
        </Text>
    </View> 
)}

const styles = StyleSheet.create({
    welcomebox: {
        position: 'absolute',
        marginTop: '50%',
        height: '30%',
        width: '80%',
        marginHorizontal: '10%',
        padding: 20,
        paddingVertical: 40,
        backgroundColor: '#EAE8DB',
        borderRadius: 35
    },
    textbox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        padding: 10,
        textAlign: 'center',
        paddingVertical: 30,
        color: '#784D4D'
    },
    close : {
        alignSelf: 'flex-end',
        transform: [
            {translateY: -20}
        ],
    },
    none: {
        display: 'none'
    }
})

export default WelcomeBox