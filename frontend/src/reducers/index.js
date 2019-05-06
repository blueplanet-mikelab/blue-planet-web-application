// import redux
import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducer';
import threadReducer from './threadReducers'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    thread: threadReducer,
});