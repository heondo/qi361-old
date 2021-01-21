import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { FlexRow, Image, Text, View } from '../atoms'

const PointInformationComponent = ({
  navigation,
  theme,
  route,
  pointID,
  pointData,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <View> */}
      <FlexRow justify="space-between" pd="6px 12px">
        <View>
          <Text>{pointData.english}</Text>
          <Text>Hello</Text>
        </View>
        <View>
          <Text>{pointData.name}</Text>
        </View>
      </FlexRow>
      {/* <PointImages /> */}
      {/* </View> */}
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointInformation = connect(mapStateToProps)(
  PointInformationComponent,
)
