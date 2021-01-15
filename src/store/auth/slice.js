import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { firebaseService } from '../../services/firebase'
// import { initializeImages, setImagesNull } from '../userImages/slice'
// import { firebaseService } from '../../services'

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    isLoading: false,
    loadingMessage: '',
    error: null,
    loggedIn: false,
    user: null,
  },
  reducers: {
    startAuthLoading: (state, action) => {
      const { loadingMessage } = action.payload || ''
      return {
        ...state,
        isLoading: true,
        loadingMessage,
      }
    },
    endAuthLoading: (state) => {
      return {
        ...state,
        isLoading: false,
        loadingMessage: '',
      }
    },
    setAuthError(state, action) {
      const { error } = action.payload
      return {
        ...state,
        error,
      }
    },
    setUser: (state, action) => {
      const { user } = action.payload
      return {
        ...state,
        loggedIn: true,
        user,
      }
    },
    logout: (state) => {
      return {
        ...state,
        user: null,
        loggedIn: false,
      }
    },
  },
})

export const {
  startAuthLoading,
  endAuthLoading,
  setAuthError,
  setUser,
  logout,
} = authSlice.actions

export default authSlice.reducer

export const thunkLogin = (user) => async (dispatch: Dispatch) => {
  try {
    dispatch(startAuthLoading({ loadingMessage: 'Logging in' }))
    dispatch(setUser({ user }))
    // const userImages = await firebaseService.getUserImages(user.uid)
    // dispatch(
    //   initializeImages({
    //     userImages,
    //   }),
    // )
    dispatch(endAuthLoading())
  } catch (err) {
    console.error(err)
    dispatch(endAuthLoading())
  }
}

export const thunkLogout = () => async (dispatch: Dispatch) => {
  try {
    await firebaseService.logout()
    dispatch(logout())
    // dispatch(setImagesNull())
  } catch (err) {
    console.error(err)
  }
}
