import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { MeridianDetailsList } from '../Details'

const DetailsScreenStack = createStackNavigator()

function DetailsScreenTabComponent({ theme }) {
  return (
    <DetailsScreenStack.Navigator initialRouteName="Details Root Screen">
      <DetailsScreenStack.Screen
        name="Details Root Screen"
        component={MeridianDetailsList}
        options={{
          headerTitle: 'Details',
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
    </DetailsScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const DetailsScreenTab = connect(mapStateToProps)(
  DetailsScreenTabComponent,
)
