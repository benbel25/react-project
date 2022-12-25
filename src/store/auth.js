import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  loggedIn: false,
  userData: {},
};

const isAdmin = (userData) => {
  return userData.admin;
};

const authSlice = createSlice({
  name: "auth",

  initialState: initalAuthState,

  reducers: {
    login(state) {
      state.loggedIn = true;
      
      //state.isAdmin = (state.userData);
    },

    logout(state) {
      state.loggedIn = false;
      state.userData = {};
    },
    updateUserData(state, action) {
      state.userData = action.payload;
      console.log(state.userData);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
