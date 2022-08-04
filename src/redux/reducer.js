import { combineReducers } from '@reduxjs/toolkit';
import reducers from './combineReducer';

export default combineReducers({
  entities: reducers,
});

