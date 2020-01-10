import React, {useState} from 'react' 


import TabNavigator from './navigation/TabNavigator'
import LoginScreen from './screens/LoginScreen'

const App = () => {

  const [login, setLogin] = useState(false)


  return  <TabNavigator />
}

export default App