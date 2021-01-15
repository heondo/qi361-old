import styled from 'styled-components/native'
import { View } from './base'

export const ListItemContainer = styled(View)`
  padding: ${(props) => (props.pd ? props.pd : '16px 6px')};
  border-style: solid;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`
