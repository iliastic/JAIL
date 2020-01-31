import React from 'react'
import { View ,ScrollView, Text, Image ,StyleSheet } from 'react-native'

import infologo from '../assets/infologo.png'

const InfoBox = () => {
    return (
        <View style={styles.container}>
            <Image source={infologo} style={styles.header}/>
            <ScrollView style={styles.scrollcontainer}>
                <Text style={styles.alinea}>
                    This application is made to give you an overview of the different coffee bars in Antwerp 
                    and their sustainability contribution. Each coffee bar is rated on 7 levels based on interviews 
                    and research. Going from the kind of coffee beans to their waste management. The goal of this app 
                    is to raise awareness, learn from each other and to grow together. {"\n"}
                </Text>
                <Text style={styles.alinea}>
                    This app is made for the consumer to make an informed choice of where to purchase your cup of coffee. 
                    But also for the coffee shops to learn from each other and improve their (way of being). {"\n"}
                    So buy your cup of coffee wisely
                </Text>
                <Text style={styles.alinea}>
                    This app is made possible by a collaboration between students from Antwerp Management School 
                    (AMS) and BeCode Antwerp. The BeCode team is responsible for the development and design of the 
                    application. While the AMS team gathered data from different coffee bars around Antwerp. {"\n"}
                </Text>
                <Text style={styles.team}>
                    Developer team {'\n'}
                </Text>
                <Text style={styles.members}>
                    Jan Haerens {'\n'}
                    Ilias Mesbahi {'\n'}
                    Panadda Manarata {'\n'}
                    Hicham Bezzizi {'\n'}
                    Ilger Depraetere {'\n'}
                </Text>
                <Text style={styles.team}>
                    AMS team {'\n'}
                </Text>
                <Text style={styles.members}>
                    Dhanvanth Raman {'\n'}
                    Matisse Verboven {'\n'}
                    Nicole  Durosko {'\n'}
                    Pauwel Derammelaere {'\n'}
                    Sofie Lambert {'\n'}
                    Stephan De Vries {'\n'}
                    Vincent Chang {'\n'}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom: '15%'
    },
    scrollcontainer: {
        padding: 8,
        paddingTop: 30,
        backgroundColor: 'rgba(255,255,255, 0.9)',
    },
    header: {
        alignSelf: 'center',
        marginBottom: -15,
        zIndex: 1000,
    },
    alinea: {
        fontSize: 16,
        lineHeight: 25,
    },
    team: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    members: {
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        paddingBottom: 30
    }
})

export default InfoBox