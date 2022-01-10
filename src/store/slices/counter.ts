import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  theCounter: number;
}

const initialState: CounterState = {
  theCounter: 12
};

const counterSlices = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    incrementCounter: state => {
      state.theCounter += 1;
    }
  }
});

export const { incrementCounter } = counterSlices.actions;

export default counterSlices.reducer;
