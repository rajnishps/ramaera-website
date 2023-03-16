import { createSlice } from "@reduxjs/toolkit"

const initialState = {
 applicantDataStorage:[]
}

export const applicantDataSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {
    applicantStorage: (state, action) => {
      state.name = action.payload
    },
  
  },
})

export const {
    applicantStorage
} = applicantDataSlice.actions

export default applicantDataSlice.reducer
