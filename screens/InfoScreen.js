import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

import InfoBox from '../components/InfoBox'

import info from '../assets/info.png'

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <InfoBox />
            <Image source={info} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        zIndex: -1
    }
})

export default InfoScreen