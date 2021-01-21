import React, { useState } from 'react'
// import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
  Text,
  View,
  ScrollView,
  FlippingCard,
  MatCommIcon,
  AbsoluteView,
  TransparentButton,
  SafeAreaView,
} from '../atoms'
import { PointGivenImage, PointUserImage } from '../molecules'

const PointImagesFlipComponent = ({ navigation, theme, route }) => {
  const [flipped, setFlipped] = useState(true)

  const handleCardFlip = () => {
    // setFlipped(!flipped)
    if (flipped) {
      setFlipped(false)
    } else {
      setFlipped(true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <SafeAreaView height="100%"> */}
      <FlippingCard
        flip={flipped}
        clickable={false}
        flipHorizontal={true}
        flipVertical={false}
      >
        {/* Face Side */}
        <ScrollView>
          <AbsoluteView top="16px" right="16px">
            <TransparentButton onPress={handleCardFlip}>
              <MatCommIcon name="rotate-3d-variant" size={24} />
            </TransparentButton>
          </AbsoluteView>
          <PointGivenImage pd="12px" />
          <Text>The Face</Text>
        </ScrollView>
        {/* Back Side */}
        <ScrollView>
          <AbsoluteView top="16px" right="16px">
            <TransparentButton onPress={handleCardFlip}>
              <MatCommIcon name="rotate-3d-variant" size={24} />
            </TransparentButton>
          </AbsoluteView>
          <PointUserImage pd="12px" />
          <Text>The back</Text>
        </ScrollView>
      </FlippingCard>
      {/* </SafeAreaView> */}
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const PointImagesFlip = connect(mapStateToProps)(
  PointImagesFlipComponent,
)
