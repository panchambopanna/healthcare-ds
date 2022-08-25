import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: {
    type: "",
    id: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userType = { type: action.payload.user, id: action.payload.id };
    },
    clearUser: (state) => {
      state.userType = { type: "", id: "" };
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
