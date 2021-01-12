import React from 'react'
import { Text, ImageSourcePropType } from 'react-native'
import { FlexRow, ListItemContainer } from '../atoms'

function SettingsListItemComponent({
  english,
}: {
  english: String
  iconPath: ImageSourcePropType
}) {
  return (
    <ListItemContainer>
      {/* Inside of here, render Settings icon and name */}
      <FlexRow>
        <Text>{english}</Text>
      </FlexRow>
    </ListItemContainer>
  )
}

export const SettingsListItem = SettingsListItemComponent
