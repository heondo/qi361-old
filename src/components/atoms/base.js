import MTCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const FlexCol = styled.View`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.pd ? props.pd : '12px 6px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  elevation: ${(props) => (props.elevation ? props.elevation : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.pd ? props.pd : '12px 6px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const Image = styled.Image`
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '48px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
`

export const EmptySpace = styled.View`
  flex-grow: 1;
`

export const SafeAreaView = styled.SafeAreaView`
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  height: ${(props) => (props.height ? props.height : '100%')};
  background-color: ${(props) => props.theme.PRIMARY_BG_COLOR};
`

export const View = styled.View`
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`
export const FlatList = styled.FlatList`
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  background-color: ${(props) => props.theme.PRIMARY_BG_COLOR};
`

export const OverLay = styled(View)`
  position: absolute;
  background-color: ${(props) => props.theme.OVERLAY_BG_COLOR};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 2;
`

export const ScrollView = styled.View`
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  /* height: 100%; */
  height: ${(props) => (props.height ? props.height : '100%')};
  background-color: ${(props) => props.theme.PRIMARY_BG_COLOR};
`

export const Text = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  margin: ${(props) => (props.mg ? props.mg : '0px')};
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
