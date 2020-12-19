import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import goalsReducer from './goalsReducer';

const rootReducer = combineReducers({authReducer, messageReducer, goalsReducer, userReducer});

export default rootReducer;