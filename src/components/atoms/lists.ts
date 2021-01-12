import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  padding: 0 20px;
`

export const ListItemContainer = styled.View`
  padding: ${(props) => (props.pd ? props.pd : '12px 6px')};
  border-style: solid;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`
