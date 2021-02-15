import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { CommonActions } from '@react-navigation/native'

import {
  FlatList,
  SafeAreaView,
  FlexRow,
  SearchInput,
  MatCommIcon,
  TransparentButton,
  EmptySpace,
  Text,
} from '../atoms'
import { SearchResultsListItem } from './SearchResultsItem'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const SearchRootComponent = ({ navigation, theme, userImages }) => {
  const meridianPointsArray = Object.entries(MERIDIAN_POINTS_DATA)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChangeText = (text) => {
    const lowerInput = text.toLowerCase().trim()
    if (!lowerInput) {
      handleCancelSearch()
      return
    }
    const filteredResults = filterPoints(lowerInput)
    setSearchResults(filteredResults)
    setSearchText(text)
  }

  const goToImagesScreen = (pointID, pointName) => {
    // TODO: the most important part of navigating, allowing the user
    // to press the back button and properly go back in the same tab. As expected...
    // Common actions.reset
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home Root Screen' },
          {
            name: 'Home Points Swiper',
            params: { pointID, pointName: pointName },
          },
        ],
      }),
    )
    navigation.navigate('Home')
  }

  // const goToDetailsScreen = (pointID) => {
  //   navigation.dispatch(
  //     CommonActions.reset({
  //       index: 3,
  //       routes: [
  //         { name: 'Details Home Screen' },
  //         { name: 'Details Points Swiper', params: { pointID } },
  //       ],
  //     }),
  //   )
  //   navigation.navigate('Details')
  // }

  const filterPoints = (lowerText) =>
    // i feel like i need to let users have better search options like commas for multiple terms
    meridianPointsArray.filter((entry) => {
      const [pointID, pointData] = entry
      const usersPointNote =
        userImages.images && userImages.images[pointID]
          ? userImages.images[pointID].note
          : ''
      // for each pointID, i can check the userImages.images[pointID] && userImages.images[pointID]?.note.toLowerCase().indexOf(lowerInput)
      // user notes filter
      if (usersPointNote.toLowerCase().indexOf(lowerText) !== -1) {
        return true
      }
      // point Data filter
      if (
        pointID.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.english.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.transliteration.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.action.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.color.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.indications.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.location.toLowerCase().indexOf(lowerText) !== -1
      ) {
        return true
      }
      return false
    })

  const handleCancelSearch = () => {
    setSearchResults([])
    setSearchText('')
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0">
        <FlexRow pd="12px 2px 4px 6px">
          <SearchInput
            placeholder="SEARCH..."
            value={searchText}
            placeholderTextColor={theme.FADED_TEXT_COLOR}
            onChangeText={handleChangeText}
          />
          <TransparentButton onPress={handleCancelSearch} pd="2px" mg="0">
            <MatCommIcon
              name="close"
              size={40}
              color={theme.PRIMARY_TEXT_COLOR}
            />
          </TransparentButton>
        </FlexRow>
        {/* <Text>{JSON.stringify(searchResults[0])}</Text> */}
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <SearchResultsListItem
              pointID={item[0]}
              pointData={item[1]}
              goToImagesScreen={goToImagesScreen}
              // goToDetailsScreen={goToDetailsScreen}
            />
          )}
          keyExtractor={(item) => item[0]}
        />
        <EmptySpace />
        {/* <EmptySpace /> */}
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const SearchRoot = connect(mapStateToProps)(SearchRootComponent)
