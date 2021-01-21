import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ScrollView, View } from '../atoms'
import { PointImagesFlip } from './PointImagesFlip'

const PointDetailsComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView height="100%">
        <PointImagesFlip />
      </ScrollView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDetails = connect(mapStateToProps)(PointDetailsComponent)
