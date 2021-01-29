import React from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ImageViewer from 'react-native-image-zoom-viewer'

import { Image, PointImageContainer, View } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, image }) => {
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')
  const images = [
    // {
    //   url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // },
    {
      // url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
      // url: '',
      url: '',
      props: { source: image },
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <View height="100%" width="auto">
        <ImageViewer imageUrls={images} />
      </View>
      {/* <ImageZoom
        cropWidth={deviceWidth}
        cropHeight={deviceHeight}
        imageHeight={deviceWidth}
        width={deviceHeight}
      >
        <Image width="100%" height="98%" resizeMode="contain" source={image} />
      </ImageZoom> */}
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
