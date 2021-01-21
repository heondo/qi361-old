import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Text, View } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, pd }) => {
  return (
    <ThemeProvider theme={theme}>
      <View height="50%" pd={pd}>
        <Text mg="auto">Our image</Text>
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
