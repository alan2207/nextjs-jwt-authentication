import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
});

export default rootReducer;
