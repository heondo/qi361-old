import React from 'react'

import { connect, useDispatch } from 'react-redux'
import {
  Button,
  EmptySpace,
  ListItemContainer,
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
      </SafeAreaView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const SettingsRoot = connect(mapStateToProps)(SettingsRootComponent)
