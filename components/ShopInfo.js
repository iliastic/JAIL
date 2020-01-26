import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

import xclose from '../assets/xclose.png'

const ShopInfo = props => {
    return (
        <View style={styles.card}>
            <View style={styles.close}>
                <Image source={xclose} />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{props.data.name}</Text>
                <Text style={styles.hours}>{props.data.hours[1]}</Text>
            </View>
            <Text style={styles.adres}>{props.data.adres}</Text>
            <View style={styles.score}></View>
            <Text style={styles.ratingtext}>coffee beans</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>alternative food</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>packaging</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>waste management</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>local economy</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>social impact</Text>
            <View style={styles.ratingbar}></View>
            <Text style={styles.ratingtext}>sustainability{'\n'} awareness</Text>
            <View style={styles.ratingbar}></View>
            <Button style={styles.website} title='visit website'/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 35,
        position: 'absolute',
        left: '5%',
        marginVertical: '20%'

    },
    close: {
        alignSelf: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        borderBottomColor: '#C0B8B8',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 25,
    },
    hours: {
        marginLeft: 'auto'
    },
})

export default ShopInfo