import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ScrollView } from '../atoms'
import { Text, SafeAreaView } from '../atoms'
import { PointImages } from './PointImagesFlip'

const PointDetailsComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <PointImages />
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
