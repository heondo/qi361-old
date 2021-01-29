import React, { useState } from 'react'
import { Dimensions, Modal } from 'react-native'
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

  const [fullScreenImages, setFullScreenImages] = useState(false)
  if (fullScreenImages) {
    return (
      <Modal>
        <ImageViewer
          imageUrls={images}
          onClick={() => setFullScreenImages(false)}
        />
      </Modal>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <PointImageContainer height="100%" width="auto">
        <ImageViewer
          imageUrls={images}
          onClick={() => setFullScreenImages(true)}
        />
        {/* {fullScreenImages ? (
          <Modal>
            <ImageViewer
              imageUrls={images}
              onClick={setFullScreenImages(false)}
            />
          </Modal>
        ) : null} */}
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
