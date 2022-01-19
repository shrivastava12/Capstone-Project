import Axios from 'axios';
import {  PLAYLIST_LOAD_SUCCESS } from './Type';


export const loadPlayList =  () => dispatch => {
    console.log('loadplaylist');
    Axios.get('http://localhost:7000/playlist').then((res) => {
        console.log(res.data)
        dispatch({
            type:PLAYLIST_LOAD_SUCCESS,
            payload:res.data
        })
    }).catch((err) => {
        console.log(err)
    })
};

