import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

import InfoBox from '../components/InfoBox'

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <InfoBox />
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
})

export default InfoScreen