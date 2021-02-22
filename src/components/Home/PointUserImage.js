import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
  AbsoluteView,
  BottomAbsoluteView,
  Button,
  ButtonText,
  FlipButton,
  FlipIcon,
  MatCommIcon,
  PointImageContainer,
  Text,
} from '../atoms'
// import { PointImages } from './PointImagesFlip'

const PointUserImageComponent = ({
  theme,
  auth,
  userImages,
  pointID,
  handleOpenModal,
  handleSubmitImage,
  selectedImage,
}) => {
  const [imagesArray, setImagesArray] = useState(null)
  const [fullScreenImages, setFullScreenImages] = useState(false)

  useEffect(() => {
    const pointImages = userImages.images[pointID]
    // setTest(pointID)
    if (selectedImage) {
      const imagesArr = [{ url: selectedImage.uri }]
      setImagesArray(imagesArr)
    } else if (userImages.images && pointImages) {
      const imagesArr = pointImages.imageURL
        ? [{ url: pointImages.imageURL }]
        : null
      setImagesArray(imagesArr)
    }
  }, [pointID, userImages.images, selectedImage])

  if (!auth.loggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <PointImageContainer height="100%" width="auto">
          <Button mg="auto" pd="12px 16px" width="auto">
            <ButtonText>Login to add your own image here</ButtonText>
          </Button>
        </PointImageContainer>
      </ThemeProvider>
    )
  }

  if (fullScreenImages) {
    return (
      <Modal>
        <ImageViewer
          renderIndicator={() => {}}
          imageUrls={imagesArray}
          onClick={() => setFullScreenImages(false)}
        />
      </Modal>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <PointImageContainer height="100%" width="auto">
        {/* <Text>
          {JSON.stringify(imagesArray)}
        </Text> */}
        {imagesArray ? (
          <ImageViewer
            renderIndicator={() => {}}
            imageUrls={imagesArray}
            onClick={() => setFullScreenImages(true)}
          />
        ) : (
          // If no user exists for the user, uploaded or selected
          <Button
            mg="auto"
            pd="12px 16px"
            width="auto"
            onPress={handleOpenModal}
          >
            <ButtonText>Add your own image here</ButtonText>
          </Button>
        )}
        {selectedImage ? (
          <>
            <BottomAbsoluteView bottom="8px" right="80px">
              <FlipButton pd="10px" onPress={handleSubmitImage}>
                <FlipIcon name="cloud-upload" size={28} />
              </FlipButton>
            </BottomAbsoluteView>
          </>
        ) : null}
        {imagesArray ? (
          <BottomAbsoluteView bottom="8px" right="16px">
            <FlipButton pd="10px" onPress={handleOpenModal}>
              <FlipIcon name="image-size-select-large" size={28} />
            </FlipButton>
          </BottomAbsoluteView>
        ) : null}
        {/* // If an image is not selected, and an image exists */}
      </PointImageContainer>
    </ThemeProvider>
  )

  // return (
  //   <ThemeProvider theme={theme}>
  //     {/* Possible views. Logged in and no image
  //       Logged in and image

  //       Logged out
  //     */}
  //     <PointImageContainer>
  //       {auth.loggedIn ? (
  //         // If logged in and no image
  //         !userImageURL ? (
  //           <Image
  //             height="98%"
  //             width="100%"
  //             resizeMode="contain"
  //             mg="auto"
  //             source={require('../../shared/images/no-image-add.png')}
  //           />
  //         ) : (
  //           // Logged in user image(
  //           <Image
  //             height="98%"
  //             width="100%"
  //             mg="auto"
  //             resizeMode="contain"
  //             source={{ uri: userImageURL }}
  //           />
  //         )
  //       ) : (
  //         <Text mg="auto">Log in to upload your own photo here</Text>
  //       )}
  //     </PointImageContainer>
  //   </ThemeProvider>
  // )
}
const mapStateToProps = ({ theme, auth, userImages }) => {
  return {
    theme,
    auth,
    userImages,
  }
}

export const PointUserImage = connect(mapStateToProps)(PointUserImageComponent)
