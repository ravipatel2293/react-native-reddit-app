import {combineReducers} from 'redux';
import apiReducer from './apiReducer';
import loginReducer from './loginReducer';
import AboutSubredditReducer from './aboutSubbredditReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  login: loginReducer,
  about: AboutSubredditReducer,
});

export default rootReducer;
