import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer from './theme/slice'
import authReducer from './auth/slice'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export const useAppDispatch = () => useDispatch()

export default store
