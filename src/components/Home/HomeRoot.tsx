import { ThemeProvider } from '@react-navigation/native'
import React from 'react'
import { connect } from 'react-redux'
import data from '../../shared/data/primaryMeridiansData'
import { RootState } from '../../store'
import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'

function HomeRootComponent({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        pd="12px 24px"
        data={data}
        keyExtractor={(item: any) => item.meridianID}
        renderItem={({ item }: any) => (
          <MeridianListItem english={item.english} iconPath={item.iconPath} />
        )}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }: RootState) => {
  return { auth, theme }
}

export const HomeRoot = connect(mapStateToProps)(HomeRootComponent)
