import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Image, Text, View } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, pd, image }) => {
  return (
    <ThemeProvider theme={theme}>
      <View height="50%" pd={pd}>
        <Image width="auto" height="100%" resizeMode="contain" source={image} />
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

export const PointGivenImage = connect(mapStateToProps)(
  PointGivenImageComponent,
)
