import styled from 'styled-components/native'

export const TransparentButton = styled.TouchableOpacity`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
`
