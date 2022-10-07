import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const visibilitySlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    show: state => {
      return !state;
    },
  },
});

export const { show } = visibilitySlice.actions;
export default visibilitySlice.reducer;
