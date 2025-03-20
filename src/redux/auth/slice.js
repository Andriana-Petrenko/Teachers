import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser,  registerUser } from "./operations";
import { initialState } from "./initialState";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
}

const slice = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder => {
    builder
      //register
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
      })
      .addCase(registerUser.rejected, handleRejected)
      //login
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
      })
      .addCase(loginUser.rejected, handleRejected)
    
      // logout
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(logoutUser.rejected, handleRejected)
      
  },
});


export const authReducer = slice.reducer;