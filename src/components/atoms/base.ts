import MTCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FlexCol = styled.View`
  display: flex;
  flex-direction: column;
`

export const Image = styled.Image`
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '48px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const View = styled.View`
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  background-color: ${(props) => props.theme.PRIMARY_BG_COLOR};
`
export const Text = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
`
export const Button = styled.Button`
  padding: 4px 2px;
  border-radius: 3px;
`
export const MatCommIcon = styled(MTCIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const MatIcon = styled(MIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`
