import React from 'react'
import { Dimensions } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { Feather, MaterialIcons } from '@expo/vector-icons'

import { Colors } from '../constans/Base'

import ProfileScreen from '../screens/ProfileScreen'
import MapScreen from '../screens/MapScreen'
import InfoScreen from '../screens/InfoScreen'
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AboutScreen from '../screens/AboutScreen';

const screenWidth = Math.round(Dimensions.get('window').width)
const horizontalMargin = (screenWidth - 270) / 2

export const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
            gesturesEnabled: false,
            swipeEnabled: false,
        }
    },
    Loading: {
        screen: LoadingScreen,
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
                gesturesEnabled: false,
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
                backgroundColor: '#FFFFFF',
                width: 270,
                height: 60,
                position: 'absolute',
                borderTopColor: 'transparent',
                shadowColor: 'rgba(0, 0, 0, 0.25)',
                shadowOffset: { width: 4, height: 0 },
                shadowRadius: 4,
                shadowOpacity: 1,
                borderRadius: 46,
                marginBottom: '10%',
                marginHorizontal: horizontalMargin,
                gesturesEnabled: false,
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
