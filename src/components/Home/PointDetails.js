import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { flipImagesCard } from '../../store/userImages/slice'
import {
  AbsoluteView,
  FlipButton,
  FlipIcon,
  FlippingCard,
  MatCommIcon,
  SafeAreaView,
  ScrollView,
  Text,
  TransparentButton,
  View,
} from '../atoms'
import { PointGivenImage, PointInformation, PointUserImage } from '../molecules'

const PointDetailsComponent = ({
  navigation,
  theme,
  route,
  pointID,
  userImages,
  flipImagesCard,
}) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  // const [flipped, setFlipped] = useState(true)

  // const handleCardFlip = () => {
  //   // setFlipped(!flipped)
  //   if (flipped) {
  //     setFlipped(false)
  //   } else {
  //     setFlipped(true)
  //   }
  // }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        {/* <ScrollView> */}
        <View height="50%">
          <FlippingCard
            flip={userImages.imagesFlipped}
            clickable={false}
            flipHorizontal={true}
            flipVertical={false}
          >
            {/* Face Side */}
            <View height="100%">
              <AbsoluteView top="16px" right="16px">
                <FlipButton onPress={flipImagesCard}>
                  <FlipIcon name="rotate-3d-variant" size={32} />
                </FlipButton>
              </AbsoluteView>
              {/* The image created from Teacher Joe */}
              <PointGivenImage image={pointData.image} />
              {/* <Text>The Face</Text> */}
            </View>
            {/* Back Side */}
            <View height="100%">
              <AbsoluteView top="16px" right="16px">
                <FlipButton onPress={flipImagesCard}>
                  <FlipIcon name="rotate-3d-variant" size={32} />
                </FlipButton>
              </AbsoluteView>
              <PointUserImage pointID={pointID} />
            </View>
          </FlippingCard>
        </View>
        <ScrollView>
          <PointInformation pointID={pointID} pointData={pointData} />
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>what</Text>
          <Text>Hello</Text>
          <Text>what</Text>
          <Text>Hello</Text>
        </ScrollView>
        {/* </ScrollView> */}
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const PointDetails = connect(mapStateToProps, {
  flipImagesCard,
})(PointDetailsComponent)
