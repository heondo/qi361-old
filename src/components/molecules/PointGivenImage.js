import React from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ImageZoom from 'react-native-image-pan-zoom'
import { Image, PointImageContainer } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, image }) => {
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')
  return (
    <ThemeProvider theme={theme}>
      <ImageZoom
        cropWidth={deviceWidth}
        cropHeight={deviceHeight}
        imageHeight={deviceWidth}
        width={deviceHeight}
      >
        <Image width="100%" height="98%" resizeMode="contain" source={image} />
      </ImageZoom>
      {/* <PointImageContainer>
        <Image width="100%" height="98%" resizeMode="contain" source={image} /> */}
      {/* <PointImages /> */}
      {/* </PointImageContainer> */}
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
