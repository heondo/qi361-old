import { ThemeProvider } from '@react-navigation/native'
import React from 'react'
import { connect } from 'react-redux'
import data from '../../shared/data/primaryMeridiansData'
import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'

function HomeRootComponent({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        pd="12px 24px"
        data={data}
        keyExtractor={(item) => item.meridianID}
        renderItem={({ item }) => (
          <MeridianListItem english={item.english} iconPath={item.iconPath} />
        )}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const HomeRoot = connect(mapStateToProps)(HomeRootComponent)
