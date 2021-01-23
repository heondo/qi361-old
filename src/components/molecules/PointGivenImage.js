import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Image, PointImageContainer } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, image }) => {
  return (
    <ThemeProvider theme={theme}>
      <PointImageContainer>
        <Image width="auto" height="100%" resizeMode="contain" source={image} />
        {/* <PointImages /> */}
      </PointImageContainer>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointGivenImage = connect(mapStateToProps)(
  PointGivenImageComponent,
)
