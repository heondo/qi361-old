import React from 'react'
// import authFire from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'
// import { GoogleSignin } from '@react-native-community/google-signin'

import { connect } from 'react-redux'
import { Button, View } from '../atoms'
import { firebaseService } from '../../services'
import { RootState } from '../../store'
import { startAuthLoading, endAuthLoading } from '../../store/auth/slice'

function SettingsListComponent({ auth: authState }: RootState) {
  // const handleGoogleSignin = () => {}
  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   try {
  //     const { idToken } = await GoogleSignin.signIn()
  //     // Create a Google credential with the token
  //     const googleCredential = authFire.GoogleAuthProvider.credential(idToken)
  //     // Sign-in the user with the credential
  //     // console.log(googleCredential)
  //     return authFire().signInWithCredential(googleCredential)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
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

  return (
    <View>
      {/* <Text>Hello</Text> */}

      {authState.user ? (
        <Button title="Logged in">{/* <Text>Logged in</Text> */}</Button>
      ) : (
        <Button title="login" onPress={handleGoogleSignIn}>
          {/* <Text>Logged iin</Text> */}
        </Button>
      )}
      {/* <Text>{JSON.stringify(authState)}</Text> */}
    </View>
  )
}

const mapStateToProps = ({ auth }: RootState) => {
  return { auth }
}

export const SettingsList = connect(mapStateToProps)(SettingsListComponent)
