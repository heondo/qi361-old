import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import Swiper from 'react-native-swiper'
import {
  SafeAreaView,
  Text,
  TransparentButton,
  TutorialButtonsRow,
  EmptySpace,
  // TutorialButtonsRow,
  // TransparentButton,
  // EmptySpace,
} from '../atoms'
import { FirstIntroScreen } from './FirstIntroScreen'

const IntroSwiperScreenComponent = ({
  // navigation,
  // route,
  theme,
  handleCloseTutorial,
}) => {
  let swiperRef
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <Swiper
        showsButtons={false}
        loop={false}
        ref={(swiper) => (swiperRef = swiper)}
        activeDotColor={theme.PRIMARY_TEXT_COLOR}
        showsPagination={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
        index={0}
      >
        <FirstIntroScreen />
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
      </Swiper>
      <TutorialButtonsRow pd="0 24px">
        {currentIndex === 0 ? (
          <TransparentButton onPress={handleCloseTutorial}>
            <Text>SKIP</Text>
          </TransparentButton>
        ) : (
          <TransparentButton onPress={() => swiperRef.scrollBy(-1)}>
            <Text>PREV</Text>
          </TransparentButton>
        )}
        <EmptySpace />
        {currentIndex < 2 ? (
          <TransparentButton onPress={() => swiperRef.scrollBy(1)}>
            <Text>NEXT</Text>
          </TransparentButton>
        ) : (
          <TransparentButton onPress={handleCloseTutorial}>
            <Text>DONE</Text>
          </TransparentButton>
        )}
      </TutorialButtonsRow>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const IntroSwiperScreen = connect(mapStateToProps)(
  IntroSwiperScreenComponent,
)
