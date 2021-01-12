import { createSlice } from '@reduxjs/toolkit'
import { lightTheme } from '../../config'

const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    toggleTheme(state) {
      if (state.mode === 'light') {
        return lightTheme
      }
      return lightTheme
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
export type ThemeState = ReturnType<typeof themeSlice.reducer>
