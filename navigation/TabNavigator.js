import React from 'react' 
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'
import LoginScreen from '../screens/LoginScreen'
import ListScreen from '../screens/ListScreen'

const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
    },
    Map: {
      screen: MapScreen,
    },
    List: {
      screen: ListScreen,
    }
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => {

    },
    tabBarOptions: {
        
    }
  })

const TabNavigator = createAppContainer(AppNavigator)

export default TabNavigator