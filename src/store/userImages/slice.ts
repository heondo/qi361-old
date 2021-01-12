import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { firebaseService } from '../../services/firebase'
// import { firebaseService } from '../../services'

const userImagesSlice = createSlice({
  name: 'userImages',
  initialState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    images: {},
  },
  reducers: {
    startImageLoading: (state, action) => {
      const { loadingMessage } = action.payload || ''
      return {
        ...state,
        loadingMessage,
        isLoading: true,
      }
    },
    endImageLoading: (state) => {
      return {
        ...state,
        loadingMessage: '',
        isLoading: false,
      }
    },
    addImageToState: (state, action) => {
      const { pointID, imageURL, note } = action.payload
      return {
        ...state,
        images: {
          ...state.images,
          [pointID]: {
            note,
            imageURL,
          },
        },
      }
    },
    addNoteToState: (state, action) => {
      const {
        pointID,
        note,
      }: { pointID: string; note: string } = action.payload
      const imageURL =
        (state.images &&
          state.images[pointID] &&
          state.images[pointID].imageURL) ||
        null
      return {
        ...state,
        images: {
          ...state.images,
          [pointID]: {
            note,
            imageURL,
          },
        },
      }
    },
    initializeImages: (state, action) => {
      const { userImages } = action.payload
      return {
        ...state,
        images: userImages,
      }
      // I want to, grab the objects from the document....it may come back as an array. No wait.abs
    },
    setImagesNull: (state) => {
      return {
        ...state,
        images: [],
      }
    },
  },
})

export const {
  addImageToState,
  startImageLoading,
  endImageLoading,
  initializeImages,
  setImagesNull,
  addNoteToState,
} = userImagesSlice.actions

export default userImagesSlice.reducer

export const thunkAddNote = (
  userID: string,
  pointID: string,
  note: string,
  setLoadingState = () => {},
) => async (dispatch: Dispatch) => {
  try {
    setLoadingState(true)
    await firebaseService.updateNote(userID, pointID, note)
    dispatch(
      addNoteToState({
        pointID,
        note,
      }),
    )
    setLoadingState(false)
  } catch (err) {
    console.error(err)
  }
}

export const thunkAddImage = (
  userID: string,
  pointID: string,
  filePath: string,
  note: string,
  setLoadingState = () => {},
  setSelectedImage = () => {},
) => async (dispatch) => {
  // pass in the file path to the image, use the firebase API to upload and get the image url
  try {
    setLoadingState(true)
    const imageURL = await firebaseService.putFile(
      userID,
      pointID,
      filePath,
      note,
    )
    dispatch(
      addImageToState({
        pointID,
        imageURL,
        note,
      }),
    )
    setLoadingState(false)
    setSelectedImage(null)
    // after getting the download url, upload to firestore...
  } catch (err) {
    setLoadingState(false)
    console.error(err)
  }
}
