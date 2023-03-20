import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  appData: [],
  projectData: [],
}

export const applicantDataSlice = createSlice({
  name: "applicantData",
  initialState,
  reducers: {
    changeAppData: (state, action) => {
      state.appData = action.payload
    },
    changeProjectData: (state, action) => {
      state.appData = action.payload
    },
  },
})

export const { changeAppData, changeProjectData } = applicantDataSlice.actions

export default applicantDataSlice.reducer
