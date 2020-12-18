import { combineReducers } from 'redux';
import authReducer from './auth';
import messageReducer from './message';

const rootReducer = combineReducers({authReducer, messageReducer});

export default rootReducer;