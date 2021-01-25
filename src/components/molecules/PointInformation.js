import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { FlexRow, Text, View } from '../atoms'
import { CircleOrIcon } from './CircleOrIcon'

const PointInformationComponent = ({
  navigation,
  theme,
  route,
  pointID,
  pointData,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <FlexRow justify="space-between" pd="6px 12px">
          {/* Left info */}
          <View>
            <Text mg="0 0 6px 0">{pointData.english}</Text>
            <FlexRow>
              <CircleOrIcon colorCode={pointData.colorCode} />
              <Text> - {pointData.depth} mm</Text>
            </FlexRow>
          </View>
          {/* Right info */}
          <View>
            <Text>{pointData.name}</Text>
          </View>
        </FlexRow>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name}</Text>
        <Text>{pointData.name} 12</Text>
      </View>
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
