import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userType: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.userType = action.payload;
    },
    clearUser: (state) => {
        state.userType = "";
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer