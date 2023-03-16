import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  City: "",
  Country: "",
  State: "",
  dob: "",
  email: "",
  mobileNumber: "",
  name: "",
  occupation: "",
  directorData: "",
  projectId: "",
}

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.City = action.payload
    },
    changeCountry: (state, action) => {
      state.Country = action.payload
    },
    changeState: (state, action) => {
      state.State = action.payload
    },
    changeDob: (state, action) => {
      state.dob = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeMobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeOccupation: (state, action) => {
      state.occupation = action.payload
    },
    changeDirectorData: (state, action) => {
      state.directorData = action.payload
    },
    changeProjectId: (state, action) => {
      state.projectId = action.payload
    },
  },
})

export const {
  changeCity,
  changeCountry,
  changeState,
  changeDob,
  changeEmail,
  changeMobileNumber,
  changeName,
  changeOccupation,
  changeDirectorData,
  changeProjectId,
} = projectSlice.actions

export default projectSlice.reducer
