import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { SearchRoot } from '../search'

const SearchScreenStack = createStackNavigator()

function SearchScreenTabComponent({ theme }) {
  return (
    <SearchScreenStack.Navigator initialRouteName="Search Root Screen">
      <SearchScreenStack.Screen
        name="Search Root Screen"
        component={SearchRoot}
        options={{
          headerTitle: 'Home',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BG_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
    </SearchScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const SearchScreenTab = connect(mapStateToProps)(
  SearchScreenTabComponent,
)
