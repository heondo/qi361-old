import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { View, Text } from '../atoms'
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
      <View pd={pd}>
        {auth.isLoggedIn ? (
          <Text>The image from userimages redux</Text>
        ) : (
          <Text>Logged out watermark</Text>
        )}
        {/* <PointImages /> */}
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
