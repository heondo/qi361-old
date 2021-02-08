import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectImageService } from '../../services'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { flipImagesCard } from '../../store/userImages/slice'
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
  userImages,
  flipImagesCard,
}) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  // const [userImageURL, setUserImageURL] = useState(null)
  // const [userNote, setUserNote] = useState('')
  // const [noteInput, setNoteInput] = useState(userNote)
  // const [imagesArray, setImagesArray] = useState(null)
  // const [isNoteLoading, setNoteLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  // const [imageUploading, setImageUploading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  // const [fullScreenImages, setFullScreenImages] = useState(false)

  const usersNote = userImages.images?.[pointID]?.note || ''
  // console.log(userImages, pointID, userImages?.images[pointID])

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleAddImagePress = () => {
    setIsModalVisible(false)
    selectImageService.handleLaunchLibrary()
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        {isModalVisible && (
          <SelectEditImageModal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            handleAddImagePress={handleAddImagePress}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
        {/* <ScrollView> */}
        <View height="60%" width="100%">
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
        />
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const PointDetails = connect(mapStateToProps, {
  flipImagesCard,
})(PointDetailsComponent)
