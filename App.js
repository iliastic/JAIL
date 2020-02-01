import React, { useState } from 'react'
import { Navigator } from './navigation/TabNavigator'

const App = () => {

  const [login, setLogin] = useState(false)

  return <Navigator />
}


export default App