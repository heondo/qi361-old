import React from 'react'
// import authFire from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'
// import { GoogleSignin } from '@react-native-community/google-signin'

import { connect, useDispatch } from 'react-redux'
import {
  Button,
  EmptySpace,
  ListItemContainer,
  ScrollView,
  ButtonText,
} from '../atoms'
import { firebaseService } from '../../services'
import { RootState } from '../../store'
import {
  startAuthLoading,
  endAuthLoading,
  thunkLogout,
} from '../../store/auth/slice'
import { UserAvatar } from './UserAvatar'
import { SettingsList } from './SettingsList'
import { ThemeSwitch } from './ThemeSwitch'
import { ThemeProvider } from 'styled-components'

function SettingsRootComponent({ auth: authState, theme }: RootState) {
  const dispatch = useDispatch()
  const handleGoogleSignIn = async () => {
    try {
      startAuthLoading({
        loadingMessage: 'Logging In',
      })
      await firebaseService.googleLogin()
    } catch (err) {
      console.error(err)
    } finally {
      endAuthLoading()
    }
  }

  const handleLogout = () => {
    dispatch(thunkLogout())
  }

  // const handleG

  return (
    <ThemeProvider theme={theme}>
      <ScrollView pd="24px" height="100%">
        {authState.user ? (
          <>
            <UserAvatar />
            <SettingsList />
          </>
        ) : (
          <Button title="LOGIN" onPress={handleGoogleSignIn}>
            <ButtonText>Login</ButtonText>
          </Button>
        )}
        <EmptySpace />
        <ListItemContainer>
          <ThemeSwitch />
        </ListItemContainer>
        {authState.user && (
          <Button mg="24px 0" title="LOGOUT" onPress={handleLogout}>
            <ButtonText>Logout</ButtonText>
          </Button>
        )}
      </ScrollView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }: RootState) => {
  return { auth, theme }
}

export const SettingsRoot = connect(mapStateToProps)(SettingsRootComponent)
