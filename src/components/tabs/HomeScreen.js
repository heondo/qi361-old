import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { PointsList, HomeRoot, PointsSwiper } from '../Home'

const HomeScreenStack = createStackNavigator()

function HomeScreenTabComponent({ theme }) {
  return (
    <HomeScreenStack.Navigator initialRouteName="Home Root Screen">
      <HomeScreenStack.Screen
        name="Home Root Screen"
        component={HomeRoot}
        options={{
          headerTitle: 'Home',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BG_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
      <HomeScreenStack.Screen
        name="Home Points List"
        component={PointsList}
        options={({ route }) => ({
          headerTitle: `${route.params.meridianName} - ${route.params.chinese}`,
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BG_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        })}
      />
      <HomeScreenStack.Screen
        name="Home Points Swiper"
        component={PointsSwiper}
        options={({ route }) => ({
          headerTitle: `${route.params.pointName}`,
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BG_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        })}
      />
    </HomeScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const HomeScreenTab = connect(mapStateToProps)(HomeScreenTabComponent)
