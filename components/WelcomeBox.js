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