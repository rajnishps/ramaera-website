import { configureStore } from "@reduxjs/toolkit"
import applicationReducer from "../slice/applicationSlice"
import logInUserReducer from "../slice/userSlice"
import projectReducer from "../slice/projectSlice"

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    logInUser: logInUserReducer,
    project: projectReducer,
  },
})
