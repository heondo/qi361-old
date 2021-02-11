import styled from 'styled-components/native'
import { Button } from './base'

export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 0;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const FlipButton = styled(Button)`
  width: auto;
  padding: ${(props) => (props.pd ? props.pd : '6px')};
  border-radius: 24px;
`
