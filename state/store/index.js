import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "../slice/applicationSlice"
import logInUserReducer from "../slice/userSlice"
import projectReducer from "../slice/projectSlice"
import applicationDataReducer from "../slice/applicantDataSlice"

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    logInUser: logInUserReducer,
    project: projectReducer,
    applicationData: applicationDataReducer,
  },
})
