import styled from 'styled-components/native'
import { FlatList, View } from './base'

export const ListItemContainer = styled(View)`
  padding: ${(props) => (props.pd ? props.pd : '16px 6px')};
  border-style: solid;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
`

export const SearchList = styled(FlatList)`
  width: 100%;
  padding: 4px 8px;
`
