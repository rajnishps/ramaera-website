import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  accessToken: "",
}

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    getAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
  },
})

export const { getAccessToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
