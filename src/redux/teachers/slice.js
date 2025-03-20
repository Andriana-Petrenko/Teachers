import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchTeachers } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};


const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    resetTeachers: (state) => {
      state.teachers = [];
      state.lastKey = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.teachers = [...state.teachers,...action.payload];
        // state.lastKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export const { resetTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;