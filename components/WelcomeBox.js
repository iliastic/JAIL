import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native'

import xclose from '../assets/xclose.png'
import welcomebox from '../assets/welcome-box.png'

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
        //checkStorage()
    },[])

    return (
    <View style={dismiss ? styles.none : styles.welcomebox}>
        <TouchableOpacity onPress={()=> {
            dismissBox()
            setStorage()
        }} style={{padding: 15}}><Image source={xclose} style={styles.close} /></TouchableOpacity>
        <Text style={styles.textbox}>
            Welcome to cupp-a,{'\n'}
            Made to explore and learn about the sustainability of Antwerp coffee venues. 
        </Text>
        <Image source={welcomebox} style={styles.background}/>
    </View> 
)}

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
            {translateY: -130}
        ],
        overflow: 'hidden'
    },
    textbox: {
        marginTop: 5,
        width: '100%',
        height: 160,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 10,
        textAlign: 'center',
        paddingTop: 50,
        color: '#784D4D',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    close : {
        alignSelf: 'flex-end',
    },
    none: {
        display: 'none'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: -1,
        
    }
})

export default WelcomeBox
