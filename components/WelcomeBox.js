import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import LaunchCheck from '../database/LaunchCheck'

import xclose from '../assets/xclose.png'

const WelcomeBox = () => {

    const [firstLaunch, setFirstLaunch] = useState(false)
    const [hasChecked, setHasChecked] = useState(false)
    const [dismiss, setDismiss] = useState(false)
    
    const dismissBox = () => {
        setDismiss(true)
    }

    useEffect(() => {
        const checkLaunch =  async () => {
            const firstLaunch = await LaunchCheck()
            setFirstLaunch(firstLaunch)
            setHasChecked(true)
        }
        checkLaunch()
    })

    if (!hasChecked){
        return null
    }

<<<<<<< HEAD
    useEffect(()=> {
        //checkStorage()
    },[])

    return (
    <View style={dismiss ? styles.none : styles.welcomebox}>
        <TouchableOpacity onPress={()=> {
            dismissBox()
            setStorage()
        }} style={{padding: 15}}><Image source={xclose} style={styles.close} /></TouchableOpacity>
=======
    return firstLaunch ?
    <View style={dismiss ? styles.none : styles.welcomebox}>
        <TouchableOpacity onPress={dismissBox} style={{paddingHorizontal: 20}}><Image source={xclose} style={styles.close} /></TouchableOpacity>
>>>>>>> 5799e296bc54674d8a9820ed138f3e700dec12a8
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