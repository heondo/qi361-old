import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList, Text, SafeAreaView } from '../atoms'
import { MeridianPointListItem } from '../molecules'

const MeridiansListComponent = ({ navigation, theme, route }) => {
  const { points } = route.params

  // const handlePointPress = (pointID) => {
  //   navigation.navigate('Memory Points Swiper', {
  //     pointID,
  //   })
  // }
  return (
    <ThemeProvider theme={theme}>
      {/* <SafeAreaView>
        <Text>{JSON.stringify(points)}</Text>
      </SafeAreaView> */}
      <FlatList
        pd="12px 24px"
        data={points}
        renderItem={({ item }) => <MeridianPointListItem pointID={item} />}
        keyExtractor={(item) => item}
      />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const MeridiansList = connect(mapStateToProps)(MeridiansListComponent)
