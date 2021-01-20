import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
  FlexRow,
  Image,
  ListItemContainer,
  Text,
  TransparentButton,
} from '../atoms'

function MeridianListItemComponent({
  english,
  iconPath,
  meridianName,
  points,
  theme,
  chinese,
  handleMeridianPress,
}) {
  const handlePress = () => {
    handleMeridianPress({ points, meridianName, chinese })
  }
  return (
    <ThemeProvider theme={theme}>
      <TransparentButton onPress={handlePress}>
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
      </TransparentButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ auth, theme }) => {
  return { auth, theme }
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)
