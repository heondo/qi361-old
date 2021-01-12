import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { FlexRow, Image, ListItemContainer, Text } from '../atoms'

function MeridianListItemComponent({
  english,
  iconPath,
}: {
  english: String
  iconPath: ImageSourcePropType
}) {
  return (
    <ListItemContainer>
      {/* Inside of here, render meridian icon and name */}
      <FlexRow>
        {iconPath ? (
          <Image
            source={iconPath}
            height="28px"
            width="30px"
            resizeMode="contain"
          />
        ) : null}
        <Text>{english}</Text>
      </FlexRow>
    </ListItemContainer>
  )
}

export const MeridianListItem = MeridianListItemComponent
