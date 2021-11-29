import { configureStore } from '@reduxjs/toolkit'
import modeReducer from "./darkmode"

export const store = configureStore({
  reducer: {
    modeSwitch : modeReducer
  },
})