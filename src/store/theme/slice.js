import { createSlice } from '@reduxjs/toolkit'
import { darkTheme, lightTheme } from '../../config'

const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    toggleTheme(state) {
      if (state.mode === 'light') {
        return darkTheme
      }
      return lightTheme
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
