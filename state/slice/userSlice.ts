import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: "",
}

export const logInUserSlice = createSlice({
  name: "logInUser",
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.email = action.payload
    },
    getPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { getEmail, getPassword } = logInUserSlice.actions

export default logInUserSlice.reducer
