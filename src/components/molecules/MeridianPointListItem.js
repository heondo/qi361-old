import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  Text,
  EmptySpace,
  FlexRow,
  ListItemContainer,
  TransparentButton,
} from '../atoms'
import { CircleOrIcon } from '../molecules'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

function MeridianPointListItemComponent({
  pointID,
  handlePointPress,
  theme,
  margin,
}) {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  // const handleButtonPress = () => {
  //   handlePointPress(pointID)
  // }
  return (
    <ThemeProvider theme={theme}>
      <TransparentButton
        onPress={() =>
          handlePointPress({ pointID, pointName: pointData.english })
        }
      >
        <ListItemContainer>
          <FlexRow pd="2px 0">
            {pointData.colorCode ? (
              <CircleOrIcon
                size={18}
                colorCode={pointData.colorCode}
                margin="0 8px 0 0"
              />
            ) : null}
            <Text fontSize="18px" mg="0 4px 0 0">
              {pointID} -
            </Text>
            <Text fontSize="18px">{pointData.name} </Text>
            <Text fontSize="18px">{pointData.transliteration}</Text>
            <EmptySpace />
            <Text fontSize="18px">{pointData.korean}</Text>
          </FlexRow>
        </ListItemContainer>
      </TransparentButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const MeridianPointListItem = connect(mapStateToProps)(
  MeridianPointListItemComponent,
)
