import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { View } from '../atoms'
import { PointImages } from './PointImagesFlip'

const PointDetailsComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <PointImages />
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDetails = connect(mapStateToProps)(PointDetailsComponent)
