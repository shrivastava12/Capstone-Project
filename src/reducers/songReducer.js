import { SONG_LOAD_SUCCESS } from "../actions/Type";

const initialState = {
    songs:[{}]
}


export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case SONG_LOAD_SUCCESS:
            return{
                ...state,
                songs:payload
            }
        default:
            return state;
    }
}