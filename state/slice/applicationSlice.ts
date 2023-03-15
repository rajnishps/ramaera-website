import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  applicantType: "",
  applicantAddress: "",
  email: "",
  firmName: "",
  mobileNumber: "",
  District: "",
  State: "",
}

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeApplicantType: (state, action) => {
      state.applicantType = action.payload
    },
    changeApplicantAddress: (state, action) => {
      state.applicantAddress = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeFirmName: (state, action) => {
      state.firmName = action.payload
    },
    changeMobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    },
    changeDistrict: (state, action) => {
      state.District = action.payload
    },
    changeState: (state, action) => {
      state.State = action.payload
    },
  },
})

export const {
  changeName,
  changeApplicantType,
  changeApplicantAddress,
  changeEmail,
  changeFirmName,
  changeMobileNumber,
  changeDistrict,
  changeState,
} = applicationSlice.actions

export default applicationSlice.reducer
