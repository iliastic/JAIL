import { AsyncStorage } from 'react-native'

const HAS_LAUNCHED = 'has-launched'
const setAppLaunched = () => {
    AsyncStorage.setItem(HAS_LAUNCHED, 'true')
}

export default async function LaunchCheck() {
    try {
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED)
        if ( hasLaunched === null ){
            setAppLaunched()
            return true
        }
        return false
    } catch (error) {
        return false
    }
}