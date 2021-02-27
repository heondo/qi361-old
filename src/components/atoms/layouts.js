import styled from 'styled-components/native'
import FlipCard from 'react-native-flip-card'
import { FlexRow, View } from './base'

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
export const ModalView = styled(View)`
  background-color: ${(props) => props.theme.PRIMARY_BG_COLOR};
  padding: 20px;
  border-radius: 6px;
`

export const BottomAbsoluteView = styled.View`
  position: absolute;
  z-index: 5;
  bottom: ${(props) => (props.bottom ? props.bottom : 0)};
  right: ${(props) => (props.right ? props.right : 0)};
`

export const SearchItemBottomBorder = styled.View`
  background-color: lightgrey;
  height: 1px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`
