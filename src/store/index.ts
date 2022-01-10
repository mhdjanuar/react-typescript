import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/combine';
import reducerToolkit from './reducers/combine.toolkit';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// with redux-toolkit
export const storeToolkit = configureStore({
  reducer: reducerToolkit,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof storeToolkit.dispatch;
export type RootState = ReturnType<typeof storeToolkit.getState>;
