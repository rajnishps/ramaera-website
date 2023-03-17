import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  applicantDataStorage: [],
}

export const applicantDataSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {
    setApplicantStorage: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { setApplicantStorage } = applicantDataSlice.actions

export default applicantDataSlice.reducer
