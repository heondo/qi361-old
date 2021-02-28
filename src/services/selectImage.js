import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import PhotoEditor from 'react-native-photo-editor'

const options = {
  // title: 'Select Image',
  quality: 0.9,
  // maxWidth: 500,
  // maxHeight: 800,
  // allowsEditing: true,
  // storageOptions: {
  //   skipBackup: true,
  //   path: 'images',
  // },
}

export const selectImageService = {
  handleLaunchLibrary: (callbackSetState) => {
    launchImageLibrary(options, callbackSetState)
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', Object.keys(response))
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker')
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error)
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton)
    //   } else {
    //     const selectedImageData = {
    //       uri: response.uri,
    //       data: response.data,
    //       path: response.path,
    //     }
    //     if (callbackSetState) {
    //       callbackSetState(selectedImageData)
    //       //also send back the data?
    //     }
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     // return 'data:image/jpeg;base64,' + response.data
    //   }
    // })
  },
  handleEditImage: (imagePath, setState) => {
    PhotoEditor.Edit({
      path: imagePath,
      onDone: (path) => {
        const editedImage = {
          uri: `file://${path}`,
          path: path,
          fileType: path.split('.')[path.split('.').length - 1],
        }
        setState(editedImage)
      },
    })
  },
}
