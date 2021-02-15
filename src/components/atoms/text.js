import styled from 'styled-components'
import { Text } from './base'

export const Label = styled(Text)`
  text-align: left;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${(props) => props.theme.FADED_GREY};
`

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  /* color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR}; */
`

export const SearchNoteText = styled(Text)`
  width: 75%;
  text-align: left;
`
