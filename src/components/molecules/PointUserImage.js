import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Button, ButtonText, Image, PointImageContainer, Text } from '../atoms'
// import { PointImages } from './PointImagesFlip'

const PointUserImageComponent = ({
  navigation,
  theme,
  route,
  auth,
  pointID,
  userImages,
}) => {
  const [userImageURL, setUserImageURL] = useState(null)
  const [userNote, setUserNote] = useState('')
  const [noteInput, setNoteInput] = useState(userNote)
  const [imagesArray, setImagesArray] = useState(null)

  useEffect(() => {
    const pointImages = userImages.images[pointID]
    if (userImages.images && pointImages) {
      setUserImageURL(pointImages.imageURL || null)
      setUserNote(pointImages.note || '')
      setNoteInput(pointImages.note || '')

      const imagesArr = pointImages ? [{ url: pointImages.image }] : null
      setImagesArray(imagesArr)
    }
  }, [pointID, userImages.images])

  const [fullScreenImages, setFullScreenImages] = useState(false)

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
        {imagesArray ? (
          <ImageViewer
            renderIndicator={() => {}}
            imageUrls={imagesArray}
            onClick={() => setFullScreenImages(true)}
          />
        ) : (
          <Button mg="auto" pd="12px 16px" width="auto">
            <ButtonText>Add your own image here</ButtonText>
          </Button>
        )}
        {/* <Image source={require('../../shared/images/no-image-add.png')} /> */}
        {/* {fullScreenImages ? (
          <Modal>
            <ImageViewer
              imageUrls={images}
              onClick={setFullScreenImages(false)}
            />
          </Modal>
        ) : null} */}
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
