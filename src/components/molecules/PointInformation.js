import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { FlexRow, Text, View, ScrollView } from '../atoms'
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
      <View height="40%" width="100%">
        <FlexRow justify="space-between" pd="6px 12px">
          {/* Left info */}
          <View>
            <Text mg="0 0 6px 0">
              {pointID}: {pointData.english}
            </Text>
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
        <ScrollView>
          <View pd="6px">
            <FlexRow>
              <Text>Location: {pointData.location}</Text>
            </FlexRow>
            {/* <Text>{pointData.name}</Text> */}
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
            <Text>{pointData.name}</Text>
            <Text>{pointData.name}</Text>
          </View>
        </ScrollView>
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
