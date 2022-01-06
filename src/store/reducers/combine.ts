import { combineReducers } from 'redux';
import homepage from '../homepage/reducer';

const reducers = combineReducers({
  homepage
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
