import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter';

const reducers = combineReducers({
  counterSlice
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
