import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFirstLaunch: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsFirstLaunch(state, action) {
      state.isFirstLaunch = action.payload;
    },
  },
});

export const {setIsFirstLaunch} = appSlice.actions;
