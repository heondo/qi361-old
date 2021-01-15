import styled from 'styled-components/native'

export const LoadingCircle = styled.ActivityIndicator`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
`
