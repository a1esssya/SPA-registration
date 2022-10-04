import { combineReducers, createStore } from 'redux';
import isSignUp from './reducers/isSignUp';
import userInfo from './reducers/userInfo';
import isDialogOpen from './reducers/isDialogOpen';

const roorReducer = combineReducers({ isSignUp, userInfo, isDialogOpen });

export default createStore(roorReducer);
