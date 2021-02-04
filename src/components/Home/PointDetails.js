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
  View,
} from '../atoms'
import {
  PointGivenImage,
  PointInformation,
  PointUserImage,
  SelectEditImageModal,
} from '../molecules'

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
        {/* <ScrollView width="100%"> */}
        <PointInformation pointID={pointID} pointData={pointData} />
        {/* <EmptySpace /> */}
        {/* </ScrollView> */}
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
