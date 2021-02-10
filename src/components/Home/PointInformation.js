import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { thunkAddNote } from '../../store/userImages/slice'
import {
  FlexRow,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TransparentButton,
  MatCommIcon,
} from '../atoms'
import { CircleOrIcon, LoadingOverlay } from '../molecules'

const PointInformationComponent = ({
  navigation,
  theme,
  route,
  pointID,
  authState,
  pointData,
  usersNote,
  noteInput,
  setNoteInput,
}) => {
  const dispatch = useDispatch()
  const [isNoteLoading, setIsNoteLoading] = useState(false)

  const submitNote = () => {
    const trimmedNote = noteInput.trim()
    if (trimmedNote === usersNote) {
      return
    }
    dispatch(
      thunkAddNote(authState.user.uid, pointID, trimmedNote, setIsNoteLoading),
    )
    // else, we will upload the updated note to firebase.
    // console.log(noteInput)
  }
  return (
    <ThemeProvider theme={theme}>
      <View height="40%" width="100%">
        <FlexRow justify="space-between" pd="6px 12px">
          {/* Left info */}
          <View>
            <Text mg="0 0 6px 0">
              {pointID}: {pointData.english}
            </Text>
            <FlexRow>
              <CircleOrIcon colorCode={pointData.colorCode} />
              <Text> - {pointData.depth} mm</Text>
            </FlexRow>
          </View>
          {/* Right info */}
          <View>
            <Text>{pointData.name}</Text>
          </View>
        </FlexRow>
        <ScrollView>
          <View pd="6px">
            <View mg="0 0 6px 0">
              <FlexRow>
                <Text>Location: {pointData.location}</Text>
              </FlexRow>
              <FlexRow>
                <Text>Indications: {pointData.indications}</Text>
              </FlexRow>
              {pointData.action ? (
                <FlexRow>
                  <Text>Action: {pointData.action}</Text>
                </FlexRow>
              ) : null}
            </View>
            <FlexRow>
              {isNoteLoading ? <LoadingOverlay /> : null}

              <TextInput
                width="75%"
                pd="10px"
                mg="0 12px 0 0"
                multiline={true}
                maxHeight={160}
                numberOfLines={6}
                placeholderTextColor={theme.FADED_GREY}
                style={{ textAlignVertical: 'top' }}
                maxLength={500}
                value={noteInput}
                onChangeText={(text) => setNoteInput(text)}
                placeholder="Add a note..."
              />
              <TransparentButton
                width="auto"
                height="60px"
                onPress={submitNote}
              >
                <MatCommIcon name="upload" size={20} mg="auto" />
              </TransparentButton>
              {/* <Text>Hi</Text> */}
            </FlexRow>
            {/* <Text>{JSON.stringify(authState)}</Text> */}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, auth }) => {
  return {
    authState: auth,

    theme,
  }
}

export const PointInformation = connect(mapStateToProps)(
  PointInformationComponent,
)
