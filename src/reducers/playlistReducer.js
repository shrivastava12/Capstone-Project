import {  PLAYLIST_LOAD_SUCCESS } from "../actions/Type";



const initialState =  {
    playlist:[{}],
}

export default function(state = initialState,action){
    const {type,payload} =  action;
    switch(type){
        case PLAYLIST_LOAD_SUCCESS:
            return{
                ...state,
                playlist:payload
            }
       
        default:
            return state;
            
    }
}