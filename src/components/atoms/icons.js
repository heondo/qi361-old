import styled from 'styled-components/native'
import { View } from './base'

export const LoadingCircle = styled.ActivityIndicator`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
`

export const ColorCodeCircle = styled(View)`
  background-color: ${(props) => (props.color ? props.color : 'gray')};
  border-radius: 15px;
  color: ${(props) => props.theme.WHITE};
  border: 1px solid ${(props) => props.theme.WHITE};
  height: ${(props) => (props.size ? props.size : '14')}px;
  width: ${(props) => (props.size ? props.size : '14')}px;
`
