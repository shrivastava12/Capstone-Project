import { combineReducers } from 'redux';
import authReducer from './authReducer';
import playlistReducer from './playlistReducer';
import songReducer from './songReducer';


export default combineReducers({
    auth:authReducer,
    songReduce:songReducer,
    playlistReduce:playlistReducer,
})