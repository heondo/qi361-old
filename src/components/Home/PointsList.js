import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList } from '../atoms'
import { MeridianPointListItem } from '../molecules'

const PointsListComponent = ({ navigation, theme, route }) => {
  const { points } = route.params

  const handlePointPress = ({ pointID, pointName }) => {
    navigation.navigate('Home Points Swiper', {
      pointID,
      pointName,
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        pd="6px 12px"
        data={points}
        renderItem={({ item }) => (
          <MeridianPointListItem
            pointID={item}
            handlePointPress={handlePointPress}
          />
        )}
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

export const PointsList = connect(mapStateToProps)(PointsListComponent)
