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
  MatCommIcon,
  FlexRow,
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
      <ScrollView pd="24px" height="100%">
        {authState.user ? (
          <>
            <UserAvatar />
            <SettingsList />
          </>
        ) : (
          <Button
            width="40%"
            mg="24px auto"
            title="LOGIN"
            onPress={handleGoogleSignIn}
          >
            {/* <ButtonText>Google</ButtonText> */}
            <FlexRow justify="center">
              <MatCommIcon size={14} mg="0 2px" name="google" />
              <ButtonText> - LOGIN</ButtonText>
            </FlexRow>
          </Button>
        )}
        <EmptySpace />
        <ListItemContainer>
          <ThemeSwitch />
        </ListItemContainer>
        {authState.user && (
          <Button
            width="40%"
            mg="24px auto"
            title="LOGOUT"
            onPress={handleLogout}
          >
            <FlexRow justify="center">
              {/* <MatCommIcon size={14} mg="0 6px" name="google" /> */}
              <ButtonText>LOGOUT</ButtonText>
            </FlexRow>
          </Button>
        )}
      </ScrollView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const SettingsRoot = connect(mapStateToProps)(SettingsRootComponent)
