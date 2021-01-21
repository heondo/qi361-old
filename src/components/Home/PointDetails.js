import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import {
  AbsoluteView,
  FlippingCard,
  MatCommIcon,
  ScrollView,
  Text,
  TransparentButton,
  View,
} from '../atoms'
import { PointGivenImage, PointUserImage } from '../molecules'
import { PointImagesFlip } from './PointImagesFlip'

const PointDetailsComponent = ({ navigation, theme, route, pointID }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

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
      <ScrollView height="100%">
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
      </ScrollView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDetails = connect(mapStateToProps)(PointDetailsComponent)
