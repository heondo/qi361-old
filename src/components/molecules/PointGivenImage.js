import React, { useState } from 'react'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ImageViewer from 'react-native-image-zoom-viewer'

import { PointImageContainer } from '../atoms'

const PointGivenImageComponent = ({ navigation, theme, route, image }) => {
  const images = [
    {
      url: '',
      props: { source: image },
    },
  ]

  const [fullScreenImages, setFullScreenImages] = useState(false)
  if (fullScreenImages) {
    return (
      <Modal>
        <ImageViewer
          renderIndicator={() => {}}
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
          renderIndicator={() => {}}
          imageUrls={images}
          onClick={() => setFullScreenImages(true)}
        />
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
