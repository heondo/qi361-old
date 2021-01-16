import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ScrollView } from '../atoms'
import { Text, SafeAreaView } from '../atoms'

const PointDetailsComponent = ({ navigation, theme, route }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <Text>HEllo</Text>
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
