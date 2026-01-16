// counter/counter.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const step = typeof action.payload === 'number' ? action.payload : 1;
      state.value += step;
    },
    decrement: (state, action) => {
      const step = typeof action.payload === 'number' ? action.payload : 1;
      state.value -= step;
    },
    reset: (state) => {
      state.value = 0;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, reset, setValue } = counterSlice.actions;
export default counterSlice.reducer;


