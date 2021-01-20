import React from 'react'
import { Text, FlexRow, ListItemContainer, Label } from '../atoms'

function SettingsListItemComponent({ label, text }) {
  return (
    <ListItemContainer>
      {/* Inside of here, render Settings icon and name */}
      <Label>{label}</Label>
      <FlexRow justify="flex-start">
        <Text fontSize="16px">{text}</Text>
      </FlexRow>
    </ListItemContainer>
  )
}

export const SettingsListItem = SettingsListItemComponent
