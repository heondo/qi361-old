import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Swiper from 'react-native-swiper'

import PRIMARY_MERIDIANS_DATA from '../../shared/data/primaryMeridiansData'
import { PointDetails } from './PointDetails'

const PointsSwiperComponent = ({ route, theme, authState }) => {
  const [points, setPoints] = useState([])
  const [initialIndex, setInitialIndex] = useState(0)

  useEffect(() => {
    const { pointID } = route.params
    const pointsArray = PRIMARY_MERIDIANS_DATA.filter(
      (m) => m.meridianID === pointID.split('-')[0],
    )[0].points
    setInitialIndex(parseInt(pointID.split('-')[1], 0) - 1)
    setPoints(pointsArray)
  }, [route.params])

  if (!points.length) return null

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        loadMinimal={true}
        showsButtons={false}
        loop={false}
        showsPagination={false}
        index={initialIndex}
      >
        {points.map((p) => (
          <PointDetails key={p} pointID={p} />
        ))}
      </Swiper>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const PointsSwiper = connect(mapStateToProps)(PointsSwiperComponent)
