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
  pointID,
  userImages,
}) => {
  const userImageURL = userImages.images[pointID]
    ? userImages.images[pointID].image
    : null

  console.log(userImageURL)
  return (
    <ThemeProvider theme={theme}>
      {/* Possible views. Logged in and no image 
        Logged in and image

        Logged out
      */}
      <PointImageContainer>
        {auth.loggedIn ? (
          // If logged in and no image
          !userImageURL ? (
            <Image
              height="300px"
              width="300px"
              mg="auto"
              source={require('../../shared/images/no-image-add.png')}
            />
          ) : (
            // Logged in user image(
            <Image
              height="100%"
              width="100%"
              mg="auto"
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
          )
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
