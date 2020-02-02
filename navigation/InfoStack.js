import { createStackNavigator } from 'react-navigation-stack'
import AboutScreen from '../screens/AboutScreen'
import ProfileScreen from '../screens/ProfileScreen'

const InfoNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen },
    About: { screen: AboutScreen },
},
    {
        navigationOptions: {
            headerShown: false,
            gesturesEnabled: false
        }
    })

export default InfoNavigator