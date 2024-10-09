import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/campers');
        console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  'trucks/fetchById',
    async (id, thunkApi) => {
    try {
      const response = await instance.get(`/campers/${id}`);
        console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);