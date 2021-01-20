import styled from 'styled-components'
import { Text } from './base'

export const Label = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.GREY};
`

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`
