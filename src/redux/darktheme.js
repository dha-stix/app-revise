import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const darkthemeSlice = createSlice({
  name: 'darktheme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = darkthemeSlice.actions

export default darkthemeSlice.reducer