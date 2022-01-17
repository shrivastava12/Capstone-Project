import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/Type";

const initialState =  {
   
    isAuthenticated:false,
    user:JSON.parse(localStorage.getItem('user'))
}

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload
            }
        case LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated:false,
                user:localStorage.removeItem('user')
            }
        default:
            return state;
    }
}