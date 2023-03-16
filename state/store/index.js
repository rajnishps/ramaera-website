import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "../slice/applicationSlice"
import logInUserReducer from "../slice/userSlice"
import applicantDataReducer from "../slice/applicantDataSlice"

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    logInUser: logInUserReducer,
    applicant: applicantDataReducer,
  },
})
