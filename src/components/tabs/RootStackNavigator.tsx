import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import auth from '@react-native-firebase/auth'
import { connect, useDispatch } from 'react-redux'

import { HomeScreenTab } from './HomeScreen'
import { DetailsScreenTab } from './DetailsScreen'
import { SettingsScreenTab } from './SettingsScreen'
import { MatIcon } from '../atoms'
import { RootState } from '../../store'
import { thunkLogin } from '../../store/auth/slice'

const Tab = createBottomTabNavigator()

function RootStackNavigatorComponent({ theme }: RootState) {
  const dispatch = useDispatch()
  const [initializing, setInitializing] = useState(true)
  // const [user, setUser] = useState()

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    const strippedDown = user
      ? {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          signUpDate: user.metadata.creationTime,
        }
      : null
    if (initializing) {
      setInitializing(false)
    }
    if (user) {
      dispatch(thunkLogin(strippedDown))
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) {
    return null
  }

  // if (!authState.user) {
  //   return (
  //     <SafeAreaView>
  //       <Text>Login</Text>
  //     </SafeAreaView>
  //   )
  // }

  return (
    <Tab.Navigator lazy={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreenTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <MatIcon
              name="photo"
              color={focused ? theme.BLACK : theme.GREY}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreenTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <MatIcon
              name="list"
              color={focused ? theme.BLACK : theme.GREY}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreenTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <MatIcon
              name="settings"
              color={focused ? theme.BLACK : theme.GREY}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const mapStateToProps = ({ theme, auth }: RootState) => {
  return {
    theme,
    auth,
  }
}

export const RootStackNavigator = connect(mapStateToProps)(
  RootStackNavigatorComponent,
)
