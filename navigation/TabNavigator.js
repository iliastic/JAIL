import React from 'react' 
import { Dimensions } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Feather, MaterialIcons } from '@expo/vector-icons'

import Colors from '../constans/Colors'

import ProfileScreen from '../screens/ProfileScreen'
import MapScreen from '../screens/MapScreen'
import InfoScreen from '../screens/InfoScreen'

const screenWidth = Math.round(Dimensions.get('window').width)
const horizontalMargin = (screenWidth-270) / 2

const AppNavigator = createBottomTabNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Feather name='map' size={24} color={tintColor}/>),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<MaterialIcons name='person' size={24} color={tintColor}/>)
        }
    },
    Info: {
        screen: InfoScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Feather name='info' size={24} color={tintColor}/>)
        }
    },
  }, {
    initialRouteName: 'Map',
    tabBarOptions: {
        inactiveTintColor: Colors.grey,
        activeTintColor: Colors.mainTint,
        style:{
            backgroundColor: '#FFFFFF',
            width: 270,
            height: 60,
            borderTopColor: 'transparent',
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: { width: 4, height: 0},
            shadowRadius: 4,
            shadowOpacity: 1,
            borderRadius: 46,
            display: 'flex',
            marginBottom: '7%',
            marginHorizontal: horizontalMargin
        },
        showLabel: false,
    },
    },
    
)

const TabNavigator = createAppContainer(AppNavigator)

export default TabNavigator