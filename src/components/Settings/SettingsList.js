import React from 'react'
import { Text, ImageSourcePropType } from 'react-native'
import { connect } from 'react-redux'
import { SettingsListItem } from './SettingsListItem'
import { FlatList } from '../atoms'

function SettingsListComponent({ auth, theme }) {
  const userInfo = [
    {
      label: 'NAME',
      text: auth.user.displayName,
    },
    {
      label: 'EMAIL',
      text: auth.user.email,
    },
  ]
  return (
    <FlatList
      data={userInfo}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <SettingsListItem label={item.label} text={item.text} />
      )}
    />
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const SettingsList = connect(mapStateToProps)(SettingsListComponent)
