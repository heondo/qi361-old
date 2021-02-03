import styled from 'styled-components/native'
import FlipCard from 'react-native-flip-card'
import { FlexRow } from './base'

export const TutorialButtonsRow = styled(FlexRow)`
  position: absolute;
  bottom: 14px;
`

export const FlippingCard = styled(FlipCard)`
  background-color: ${(props) => props.theme.FLIPPING_BG_COLOR};
  /* elevation: 5; */
  border-style: solid;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  /* height: 100%; */
`
export const AbsoluteView = styled.View`
  position: absolute;
  z-index: 5;
  top: ${(props) => (props.top ? props.top : 0)};
  right: ${(props) => (props.right ? props.right : 0)};
`
