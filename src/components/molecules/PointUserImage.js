import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { View, Text, Image, PointImageContainer } from '../atoms'
// import { PointImages } from './PointImagesFlip'

const PointUserImageComponent = ({
  navigation,
  theme,
  route,
  auth,
  userImages,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Possible views. Logged in and no image 
        Logged in and image

        Logged out
      */}
      <PointImageContainer>
        {auth.loggedIn ? (
          <Image
            mg="auto"
            source={require('../../shared/images/no-image-add.png')}
          />
        ) : (
          <Text mg="auto">Log in to upload your own photo here</Text>
        )}
      </PointImageContainer>
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
