import styled from 'styled-components/native'
import { Button } from './base'

export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 0;
`

export const FlipButton = styled(Button)`
  width: auto;
  padding: 6px;
  border-radius: 24px;
`
