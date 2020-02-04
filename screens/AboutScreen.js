import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
            </TouchableOpacity>
            <Image style={styles.backgroundImage} source={require('../assets/info.png')} style={styles.backgroundImage} />
            <Image style={styles.infoLogo} source={require('../assets/infologo.png')} />
            <View style={styles.scrollContainer}>
                <ScrollView style={styles.scrollMargin}>
                    <Text style={styles.h1}>
                        About Cupp-a.
                </Text>
                    <Text style={styles.alinea}>
                        This application is made to give you an overview of the different coffee bars in Antwerp
                        and their sustainability contribution. Each coffee bar is rated on 7 levels based on interviews
                        and research. Going from the kind of coffee beans to their waste management. The goal of this app
                    is to raise awareness, learn from each other and to grow together. {"\n"}
                    </Text>
                    <Text style={styles.alinea}>
                        This app is made for the consumer to make an informed choice of where to purchase your cup of coffee.
                    But also for the coffee shops to learn from each other and improve. {"\n"}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    scrollContainer: {
        padding: 32,
        backgroundColor: '#ffffff',
        borderRadius: 30,
    },
    infoLogo: {
        alignSelf: 'center',
        marginTop: 57,
        marginBottom: 29,
        marginRight: 20,
    },
    alinea: {
        fontSize: 16,
        lineHeight: 25,
        letterSpacing: 0.03,
        marginBottom: 24,
    },
    h1: {
        fontSize: 24,
        lineHeight: 26,
        letterSpacing: 0.06,
        marginBottom: 27,

    },
    team: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    members: {
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        paddingBottom: 30
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    scrollMargin: {
        marginBottom: 300,
    }
})

export default AboutScreen