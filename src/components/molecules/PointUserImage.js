import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { View, Text, Image } from '../atoms'
// import { PointImages } from './PointImagesFlip'

const PointUserImageComponent = ({
  navigation,
  theme,
  route,
  pd,
  auth,
  userImages,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Possible views. Logged in and no image 
        Logged in and image

        Logged out
      */}
      <View pd={pd}>
        {auth.isLoggedIn ? (
          <Image
            mg="auto"
            source={require('../../shared/images/no-image-add.png')}
          />
        ) : (
          <Text mg="auto">Log in to upload your own photo here</Text>
        )}
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, auth, userImages }) => {
  return {
    theme,
    auth,
    userImages,
  }
}

export const PointUserImage = connect(mapStateToProps)(PointUserImageComponent)
