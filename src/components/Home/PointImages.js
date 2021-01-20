import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import FlipCard from 'react-native-flip-card'
import { Text, View } from '../atoms'

const PointImagesComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <FlipCard>
        {/* Face Side */}
        <View width="90%">
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View width="90%">
          <Text>The Back</Text>
        </View>
      </FlipCard>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointImages = connect(mapStateToProps)(PointImagesComponent)
