import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  appData: [],
}

export const applicantDataSlice = createSlice({
  name: "applicantData",
  initialState,
  reducers: {
    changeAppData: (state, action) => {
      state.appData = action.payload
    },
  },
})

export const { changeAppData } = applicantDataSlice.actions

export default applicantDataSlice.reducer
