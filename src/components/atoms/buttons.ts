import styled from 'styled-components/native'
import { Button } from './base'

export const TransparentButton = styled(Button)`
  background-color: transparent;
  width: ${(props) => (props.width ? props.width : 'auto')};
`
