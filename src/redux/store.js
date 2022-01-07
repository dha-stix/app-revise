import { configureStore } from '@reduxjs/toolkit'
import darkthemeReducer from './darktheme'
export const store = configureStore({
  reducer: {
      themeMode: darkthemeReducer,
  },
})