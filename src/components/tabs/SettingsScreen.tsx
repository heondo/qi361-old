import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { ThemeState } from '../../store/theme/slice'
import { RootState } from '../../store'
import { SettingsList } from '../Settings'

const SettingsScreenStack = createStackNavigator()

function SettingsScreenTabComponent({ theme }: { theme: ThemeState }) {
  return (
    <SettingsScreenStack.Navigator initialRouteName="Settings Root Screen">
      <SettingsScreenStack.Screen
        name="Settings Root Screen"
        component={SettingsList}
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
    </SettingsScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }: RootState) => {
  return {
    theme,
  }
}

export const SettingsScreenTab = connect(mapStateToProps)(
  SettingsScreenTabComponent,
)
