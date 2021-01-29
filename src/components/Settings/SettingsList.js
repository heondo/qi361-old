import React from 'react'
import { connect } from 'react-redux'
import { SettingsListItem } from './SettingsListItem'
import { View } from '../atoms'

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
    <View width="100%">
      {userInfo.map((u) => (
        <SettingsListItem key={u.label} label={u.label} text={u.text} />
      ))}
    </View>
    // <FlatList
    //   data={userInfo}
    //   keyExtractor={(item) => item.label}
    //   renderItem={({ item }) => (
    //     <SettingsListItem label={item.label} text={item.text} />
    //   )}
    // />
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const SettingsList = connect(mapStateToProps)(SettingsListComponent)
