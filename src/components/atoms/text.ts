import styled from 'styled-components'
import { Text } from './base'

export const Label = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${(props) => props.theme.GREY};
`
