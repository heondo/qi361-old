import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { View, Text } from '../atoms'
// import { PointImages } from './PointImagesFlip'

const PointUserImageComponent = ({ navigation, theme, route, pd }) => {
  return (
    <ThemeProvider theme={theme}>
      <View pd={pd}>
        <Text>Users uploaded image</Text>
        {/* <PointImages /> */}
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointUserImage = connect(mapStateToProps)(PointUserImageComponent)
