import React from 'react'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Text, View, ScrollView } from '../atoms'

const PointImagesComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <FlipCard>
          {/* Face Side */}
          <View>
            <Text>The Face</Text>
          </View>
          {/* Back Side */}
          <View>
            <Text>The Back</Text>
          </View>
        </FlipCard>
      </ScrollView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointImages = connect(mapStateToProps)(PointImagesComponent)
