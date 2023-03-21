import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  appData: [],
  projectData: [],
  contactUsData: [],
}

export const applicantDataSlice = createSlice({
  name: "applicantData",
  initialState,
  reducers: {
    changeAppData: (state, action) => {
      state.appData = action.payload
    },
    changeProjectData: (state, action) => {
      state.projectData = action.payload
    },
    changeContactData: (state, action) => {
      state.contactUsData = action.payload
    },
  },
})

export const { changeAppData, changeProjectData ,changeContactData} = applicantDataSlice.actions

export default applicantDataSlice.reducer
