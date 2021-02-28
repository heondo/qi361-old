import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectImageService } from '../../services'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { flipImagesCard, thunkAddImage } from '../../store/userImages/slice'
import {
  AbsoluteView,
  EmptySpace,
  FlipButton,
  FlipIcon,
  FlippingCard,
  SafeAreaView,
  Text,
  View,
} from '../atoms'
import { LoadingOverlay, SelectEditImageModal } from '../molecules'
import { PointGivenImage } from './PointGivenImage'
import { PointUserImage } from './PointUserImage'
import { PointInformation } from './PointInformation'
const PointDetailsComponent = ({
  navigation,
  theme,
  route,
  pointID,
  authState,
  userImages,
  flipImagesCard,
}) => {
  const dispatch = useDispatch()
  const usersNote = userImages.images?.[pointID]?.note || ''
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  // const [userImageURL, setUserImageURL] = useState(null)
  // const [userNote, setUserNote] = useState('')
  const [noteInput, setNoteInput] = useState(usersNote)
  // const [imagesArray, setImagesArray] = useState(null)
  // const [isNoteLoading, setNoteLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  // const [fullScreenImages, setFullScreenImages] = useState(false)

  // console.log(userImages, pointID, userImages?.images[pointID])

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleAddImagePress = () => {
    setIsModalVisible(false)
    selectImageService.handleLaunchLibrary((v) => {
      if (v.didCancel) return
      setSelectedImage(v)
    })
  }
  const handleEditImage = () => {
    selectImageService.handleEditImage(selectedImage.path, setSelectedImage)

    // RNPhotoEditor.Edit({
    //   path: selectedImage.uri,
    //   onDone: (imagePath) => {
    //     const editedImage = {
    //       uri: `file://${imagePath}`,
    //       path: imagePath,
    //       fileType: imagePath.split('.')[imagePath.split('.').length - 1],
    //     }
    //     setSelectedImage(editedImage)
    //   },
    // })
    // setIsModalVisible(false)
  }

  const handleSubmitImage = () => {
    dispatch(
      thunkAddImage(
        authState.user.uid,
        pointID,
        selectedImage.uri,
        noteInput.trim(),
        setImageUploading,
        setSelectedImage,
      ),
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        {isModalVisible && (
          <SelectEditImageModal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            handleAddImagePress={handleAddImagePress}
            handleEditImage={handleEditImage}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
        {imageUploading ? <LoadingOverlay /> : null}
        {/* <ScrollView> */}
        <View height="60%" width="100%">
          {/* <Text>{JSON.stringify(selectedImage)}</Text> */}
          <FlippingCard
            flip={userImages.imagesFlipped}
            clickable={false}
            flipHorizontal={true}
            flipVertical={false}
          >
            {/* Face Side */}
            <View>
              <AbsoluteView top="16px" right="16px">
                <FlipButton onPress={flipImagesCard}>
                  <FlipIcon name="rotate-3d-variant" size={32} />
                </FlipButton>
              </AbsoluteView>
              {/* The image created from Teacher Joe */}
              <PointGivenImage image={pointData.image} />
              {/* <Text>The Face</Text> */}
            </View>
            {/* Back Side */}
            <View>
              <AbsoluteView top="16px" right="16px">
                <FlipButton onPress={flipImagesCard}>
                  <FlipIcon name="rotate-3d-variant" size={32} />
                </FlipButton>
              </AbsoluteView>
              <PointUserImage
                pointID={pointID}
                selectedImage={selectedImage}
                handleSubmitImage={handleSubmitImage}
                handleOpenModal={handleOpenModal}
              />
            </View>
          </FlippingCard>
        </View>
        {/* <Text>{JSON.stringify(userImages)}</Text> */}
        {/* <ScrollView width="100%"> */}
        <PointInformation
          pointID={pointID}
          pointData={pointData}
          usersNote={usersNote}
          noteInput={noteInput}
          setNoteInput={setNoteInput}
        />
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, userImages, auth }) => {
  return {
    theme,
    userImages,
    authState: auth,
  }
}

export const PointDetails = connect(mapStateToProps, {
  flipImagesCard,
})(PointDetailsComponent)
