import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { FlexRow, Image, ListItemContainer, Text } from '../atoms'

function MeridianListItemComponent({ english, iconPath, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <ListItemContainer>
        {/* Inside of here, render meridian icon and name */}
        <FlexRow>
          {iconPath ? (
            <Image
              mg="0 12px 0 0"
              source={iconPath}
              height="28px"
              width="30px"
              resizeMode="contain"
            />
          ) : null}
          <Text>{english}</Text>
        </FlexRow>
      </ListItemContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)
