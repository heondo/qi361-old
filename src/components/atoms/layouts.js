import styled from 'styled-components/native'
import FlipCard from 'react-native-flip-card'
import { FlexRow } from './base'

export const TutorialButtonsRow = styled(FlexRow)`
  position: absolute;
  bottom: 14px;
`

export const FlippingCard = styled(FlipCard)`
  background-color: lightgrey;
`
export const AbsoluteView = styled.View`
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)};
  right: ${(props) => (props.right ? props.right : 0)};
`
