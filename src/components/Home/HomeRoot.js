import { ThemeProvider } from '@react-navigation/native'
import React from 'react'
import { connect } from 'react-redux'
import data from '../../shared/data/primaryMeridiansData'
import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'

function HomeRootComponent({ theme, navigation }) {
  const handleMeridianPress = ({ points, meridianName, chinese }) => {
    // navigate to the list of meridian points and pass in the meridian ID and points
    navigation.navigate('Home Points List', {
      points,
      meridianName,
      chinese,
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        pd="6px 12px"
        data={data}
        keyExtractor={(item) => item.meridianID}
        renderItem={({ item }) => (
          <MeridianListItem
            english={item.english}
            meridianName={item.english}
            iconPath={item.iconPath}
            chinese={item.chinese}
            points={item.points}
            handleMeridianPress={handleMeridianPress}
          />
        )}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const HomeRoot = connect(mapStateToProps)(HomeRootComponent)
