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
} from '../atoms'
import { PointGivenImage, PointUserImage } from '../molecules'

const PointImagesComponent = ({ navigation, theme, route }) => {
  const [flipped, setFlipped] = useState(false)

  const handleCardFlip = () => {
    // setFlipped(!flipped)
    if (flipped) setFlipped(false)
    else setFlipped(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <FlippingCard
          flip={flipped}
          // clickable={false}
          flipHorizontal={true}
          flipVertical={false}
        >
          {/* Face Side */}
          <View>
            <AbsoluteView top="16px" right="16px">
              <TransparentButton onPress={handleCardFlip}>
                <MatCommIcon name="rotate-3d-variant" size={24} />
              </TransparentButton>
            </AbsoluteView>
            <PointGivenImage pd="12px" />
            {/* <Text>The Face</Text> */}
          </View>
          {/* Back Side */}
          <View>
            <AbsoluteView top="16px" right="16px">
              <TransparentButton onPress={handleCardFlip}>
                <MatCommIcon name="rotate-3d-variant" size={24} />
              </TransparentButton>
            </AbsoluteView>
            <PointUserImage pd="12px" />
            {/* <Text>The Back</Text> */}
          </View>
        </FlippingCard>
        <View height="50%">
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointImages = connect(mapStateToProps)(PointImagesComponent)
