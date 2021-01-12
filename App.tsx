/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { RootStackNavigator } from './src/components'
import store from './src/store'
import { lightTheme } from './src/config'

declare const global: { HermesInternal: null | {} }

import { GoogleSignin } from '@react-native-community/google-signin'

GoogleSignin.configure({
  webClientId:
    '545443455098-6i8jjc6s9o4jkkij697tf753kg1iipd4.apps.googleusercontent.com',
})

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <StatusBar barStyle="dark-content" />
          {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
          <RootStackNavigator />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  )
}
export default App
