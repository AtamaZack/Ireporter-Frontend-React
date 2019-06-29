import { combineReducers } from 'redux';
import signupReducer from './reducers/signupReducer';
import redflagReducer from './reducers/redflagReducer';
import redflagsReducer from './reducers/redflagsReducer';

const rootReducers = combineReducers({
  signupReducer,
  redflagReducer,
  redflagsReducer
});

export default rootReducers;
