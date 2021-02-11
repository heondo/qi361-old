import React, { useState } from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, FlexRow, View, EmptySpace } from '../atoms'
import { toggleTheme } from '../../store/theme/slice'

function ThemeSwitchComponent({ theme, toggleTheme }) {
  const [mode, setMode] = useState(theme.mode)
  const handleThemechange = async () => {
    const newMode = theme.mode === 'light' ? 'dark' : 'light'

    await AsyncStorage.setItem('themeMode', newMode)
    setMode(newMode)
    toggleTheme()
  }

  return (
    <View>
      <FlexRow justify="space-between">
        <Text>Night mode</Text>
        <EmptySpace />
        <Switch
          trackColor={{ false: theme.aurora0, true: theme.snowStorm1 }}
          thumbColor={theme.mode === 'light' ? theme.nordNight3 : theme.aurora3}
          onValueChange={handleThemechange}
          value={mode === 'dark'}
        />
      </FlexRow>
    </View>
  )
}

const mapStateToProps = ({ theme }) => {
  return { theme }
}

export const ThemeSwitch = connect(mapStateToProps, {
  toggleTheme,
})(ThemeSwitchComponent)
