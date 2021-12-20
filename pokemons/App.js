import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home/index.js'
import Page01 from './pages/Page01/index.js'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokemon Home" component={Home} />
        <Stack.Screen name="Pokemon Page01" component={Page01} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

