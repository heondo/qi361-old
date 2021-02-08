import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  width: ${(props) => (props.width ? props.width : '100%')};
  flex-grow: 1;
  font-size: 16px;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.pd : '0')};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  /* border: */
  border-style: solid;
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
  border-radius: 5px;
`
