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
  SafeAreaView,
  View,
} from '../atoms'
import { firebaseService } from '../../services'
import {
  startAuthLoading,
  endAuthLoading,
  thunkLogout,
} from '../../store/auth/slice'
import { UserAvatar } from './UserAvatar'
import { SettingsList } from './SettingsList'
import { ThemeSwitch } from './ThemeSwitch'
import { ThemeProvider } from 'styled-components'
import { LoadingOverlay } from '../molecules'

function SettingsRootComponent({ auth: authState, theme }) {
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
      {/* {authState.isLoading && (
        <LoadingOverlay loadingMessage={authState.loadingMessage} />
      )} */}
      <SafeAreaView>
        <View pd="12px" width="100%" height="100%">
          {authState.user ? (
            <>
              <UserAvatar />
              <SettingsList />
            </>
          ) : (
            <>
              <Button title="LOGIN" onPress={handleGoogleSignIn}>
                <ButtonText>LOGIN</ButtonText>
              </Button>
            </>
          )}
          <EmptySpace />
          <ListItemContainer>
            <ThemeSwitch />
          </ListItemContainer>
          {authState.user && (
            <Button mg="24px 0" title="LOGOUT" onPress={handleLogout}>
              <ButtonText>LOGOUT</ButtonText>
            </Button>
          )}
        </View>
        {/* {authState.user ? ( */}
        {/* <>
            <UserAvatar />
            <SettingsList />
          </> */}
        {/* ) : (
          <>
            <EmptySpace />
            <Button title="LOGIN" onPress={handleGoogleSignIn}>
              <ButtonText>LOGIN</ButtonText>
            </Button>
          </>
        )} */}
      </SafeAreaView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const SettingsRoot = connect(mapStateToProps)(SettingsRootComponent)
