import React from 'react'
import { Dimensions } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { Feather, MaterialIcons } from '@expo/vector-icons'

import normalize from 'react-native-normalize';

import { Colors } from '../constans/Base'

import ProfileScreen from '../screens/ProfileScreen'
import MapScreen from '../screens/MapScreen'
import InfoScreen from '../screens/InfoScreen'
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AboutScreen from '../screens/AboutScreen';


const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;


const screenWidth = Math.round(Dimensions.get('window').width)
const horizontalMargin = (screenWidth - 270) / 2

export const AppNavigator = createStackNavigator({
    Loading: {
        screen: LoadingScreen,
        navigationOptions: {
            headerShown: false,
            gesturesEnabled: false,
            swipeEnabled: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
            gesturesEnabled: false,
            swipeEnabled: false,
        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            headerShown: false,
        }

    },
    Tab: createBottomTabNavigator({
        Map: {
            screen: MapScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Feather name='map' size={24} color={tintColor} />),
                gestureEnabled: false,
                swipeEnabled: false,
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<MaterialIcons name='person' size={24} color={tintColor} />),
                gesturesEnabled: false,
                swipeEnabled: false,
            },
        },
        Info: {
            screen: InfoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Feather name='info' size={24} color={tintColor} />),
                gesturesEnabled: false,
                swipeEnabled: false,
            },
        },
    }, {
        tabBarOptions: {
            inactiveTintColor: Colors.grey,
            activeTintColor: Colors.mainTint,
            style: {
                height: moderateScale(60, 0.4),
                // height: normalize(60, 'height'),
                width: normalize(270),
                position: 'absolute',
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                borderTopColor: 'transparent',
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 4, height: 0 },
                shadowRadius: 4,
                shadowOpacity: 1,
                borderRadius: normalize(50),
                marginBottom: normalize(50, 'height'),
            },
            showLabel: false,
            gesturesEnabled: false,
            swipeEnabled: false,

        },
    },
    ),
}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
        swipeEnabled: false,
    },
    gesturesEnabled: false,
    swipeEnabled: false,
}
)

export const Navigator = createAppContainer(AppNavigator)
