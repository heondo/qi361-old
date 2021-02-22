import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  ButtonText,
  SearchNoteText,
  FlexRow,
  TransparentButton,
  EmptySpace,
  SearchItemBottomBorder,
  MatCommIcon,
  Button,
} from '../atoms'
import { CircleOrIcon } from '../molecules'

function SearchResultsListItemComponent({
  userImages,
  theme,
  pointID,
  pointData,
  // goToDetailsScreen,
  goToImagesScreen,
}) {
  const [usersPointNote, setUsersPointNote] = useState('')

  useEffect(() => {
    userImages.images && userImages.images[pointID]
      ? setUsersPointNote(userImages.images[pointID].note)
      : null
  }, [pointID, userImages.images])

  // when i go to the  Primary Point Details, I need to send a pointID and then also,
  // the matching points for the primaryMeridiansData

  const handleItemPress = () => {
    goToImagesScreen(pointID, pointData.english)
  }

  // const handleDetailsPress = () => {
  //   goToDetailsScreen(pointID)
  // }

  return (
    <ThemeProvider theme={theme}>
      <TransparentButton onPress={handleItemPress} pd="12px 4px" mg="0 0 6px 0">
        <FlexRow mg="0 0 6px 0">
          <Text fontSize="16px">{pointData.english} - </Text>
          <Text fontSize="16px">{pointData.transliteration}</Text>
          <EmptySpace />
          <CircleOrIcon colorCode={pointData.colorCode} margin="0 6px 0 0" />
          <Text fontSize="16px">{pointID}</Text>
        </FlexRow>
        <FlexRow>
          <SearchNoteText numberOfLines={2} fontSize="14px">
            Note: {usersPointNote}
          </SearchNoteText>
          <EmptySpace />
        </FlexRow>
        <FlexRow>
          <SearchNoteText numberOfLines={2} fontSize="14px">
            Location: {pointData.location}
          </SearchNoteText>
          <EmptySpace />
          {/* <Button
            onPress={handleDetailsPress}
            width="auto"
            pd="6px"
            mg="0"
            elevation="6"
          >
            <FlexRow width="auto">
              <MatCommIcon
                color={theme.PRIMARY_BUTTON_TEXT_COLOR}
                name="information-variant"
                size={16}
              />
              <ButtonText fontSize="16px" pd="0 4px">
                Details
              </ButtonText>
            </FlexRow>
          </Button> */}
        </FlexRow>
      </TransparentButton>
      <SearchItemBottomBorder />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

SearchResultsListItemComponent.propTypes = {
  pointID: PropTypes.string,
  pointData: PropTypes.object,
  goToDetailsScreen: PropTypes.func,
  goToImagesScreen: PropTypes.func,
}

export const SearchResultsListItem = connect(mapStateToProps)(
  SearchResultsListItemComponent,
)
