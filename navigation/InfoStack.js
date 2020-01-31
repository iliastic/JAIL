import { createStackNavigator } from 'react-navigation-stack'
import DevInfoScreen from '../screens/DevInfoScreen'
import ProfileScreen from '../screens/ProfileScreen'

const InfoNavigator = createStackNavigator({
    Profile: {screen: ProfileScreen}, 
    DevInfo: {screen: DevInfoScreen},
}, 
{
    headerMode: 'none'
})

export default InfoNavigator