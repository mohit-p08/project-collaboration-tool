import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import projects from './projectReducer';

export default combineReducers({
    auth,
    token,
    projects
});