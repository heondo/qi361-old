import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import {
  AbsoluteView,
  FlipButton,
  FlipIcon,
  FlippingCard,
  MatCommIcon,
  ScrollView,
  Text,
  TransparentButton,
  View,
} from '../atoms'
import { PointGivenImage, PointInformation, PointUserImage } from '../molecules'

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
              <FlipButton onPress={handleCardFlip}>
                <FlipIcon name="rotate-3d-variant" size={32} />
              </FlipButton>
            </AbsoluteView>
            {/* The image created from Teacher Joe */}
            <PointGivenImage pd="12px" image={pointData.image} />
            {/* <Text>The Face</Text> */}
            <PointInformation pointID={pointID} pointData={pointData} />
          </ScrollView>
          {/* Back Side */}
          <ScrollView>
            <AbsoluteView top="16px" right="16px">
              <FlipButton onPress={handleCardFlip}>
                <FlipIcon name="rotate-3d-variant" size={32} />
              </FlipButton>
            </AbsoluteView>
            <PointUserImage pd="12px" />
            <Text>{JSON.stringify(pointData)}</Text>
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
