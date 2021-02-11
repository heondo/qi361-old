/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import auth from '@react-native-firebase/auth'
import { connect, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IntroSwiperScreen } from '../intro'

import { HomeScreenTab } from './HomeScreen'
import { SettingsScreenTab } from './SettingsScreen'
import { SearchScreenTab } from './SearchScreen'
import { MatIcon } from '../atoms'
import { thunkLogin } from '../../store/auth/slice'
import { toggleTheme } from '../../store/theme/slice'
import { ThemeProvider } from 'styled-components'

const Tab = createBottomTabNavigator()

function RootStackNavigatorComponent({ theme, toggleTheme }) {
  const dispatch = useDispatch()
  const [initializing, setInitializing] = useState(true)
  const [loadingTheme, setLoadingTheme] = useState(true)
  const [firstLaunch, setFirstLaunch] = useState(false)

  const setAlreadyLaunched = async () => {
    await AsyncStorage.setItem('wasLaunched', 'true')
    setFirstLaunch(false)
  }

  // const [user, setUser] = useState()

  // Handle user state changes

  useEffect(() => {
    const getWasLaunched = async () => {
      const wasAlreadyLaunched = await AsyncStorage.getItem('wasLaunched')
      if (wasAlreadyLaunched !== 'true') {
        setFirstLaunch(true)
      }
    }
    const getThemeMode = async () => {
      try {
        const themeMode = await AsyncStorage.getItem('themeMode')
        // console.log(themeMode)
        if (themeMode === 'dark') {
          toggleTheme()
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoadingTheme(false)
      }
    }

    getThemeMode()
    getWasLaunched()

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
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)

    return subscriber // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initializing || loadingTheme) {
    return null
  }

  if (firstLaunch) {
    return <IntroSwiperScreen handleCloseTutorial={setAlreadyLaunched} />
  }

  return (
    <ThemeProvider theme={theme}>
      <Tab.Navigator
        lazy={false}
        tabBarOptions={{
          activeBackgroundColor: theme.BLACK,
          inactiveBackgroundColor: theme.BLACK,
          activeTintColor: theme.WHITE,
          inactiveTintColor: theme.WHITE,
          showLabel: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatIcon
                name="photo"
                color={focused ? theme.WHITE : theme.GREY}
                size={30}
              />
            ),
          }}
        />
        {/* <Tab.Screen
        name="Details"
        component={DetailsScreenTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <MatIcon
              name="list"
              color={focused ? theme.BLACK : theme.DARK_GREY}
              size={30}
            />
          ),
        }}
      /> */}
        <Tab.Screen
          name="Search"
          component={SearchScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatIcon
                name="search"
                color={focused ? theme.WHITE : theme.GREY}
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
                color={focused ? theme.WHITE : theme.GREY}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

// setLoadin÷

export const RootStackNavigator = connect(mapStateToProps, { toggleTheme })(
  RootStackNavigatorComponent,
)
