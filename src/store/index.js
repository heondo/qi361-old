import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer from './theme/slice'
import authReducer from './auth/slice'
import userImagesReducer from './userImages/slice'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  userImages: userImagesReducer,
})
const store = configureStore({
  reducer: rootReducer,
  // middleware: []
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const useAppDispatch = () => useDispatch()

export default store
