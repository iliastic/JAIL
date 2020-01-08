import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

import Shoplist from '../components/ShopList'

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to MapScreen</Text>
            <Shoplist />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MapScreen