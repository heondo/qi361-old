import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, FlexRow, Button, View } from '../atoms'
import { toggleTheme } from '../../store/theme/slice'
import { RootState } from '../../store'

function ThemeSwitchComponent({ theme, toggleTheme }) {
  const handleThemechange = async () => {
    await AsyncStorage.setItem(
      'themeMode',
      theme.mode === 'light' ? 'dark' : 'light',
    )
    toggleTheme()
  }

  return (
    <View>
      <FlexRow justify="space-between">
        <Text>Night mode</Text>
        <Switch
          trackColor={{ false: theme.GREY, true: theme.DARK_GREY }}
          thumbColor={theme.mode === 'light' ? theme.aurora4 : theme.nordNight1}
          onValueChange={handleThemechange}
          value={theme.mode !== 'light'}
        />
      </FlexRow>
    </View>
  )
}

const mapStateToProps = ({ theme }: RootState) => {
  return { theme }
}

export const ThemeSwitch = connect(mapStateToProps, {
  toggleTheme,
})(ThemeSwitchComponent)
