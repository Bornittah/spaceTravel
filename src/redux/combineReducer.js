import { combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';


const reducers = combineReducers({
  rockets: rocketReducer,

});

export default reducers;
