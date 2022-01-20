import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from "../actions/Type";

const initialState =  {
   
    isAuthenticated:false,
    user:JSON.parse(localStorage.getItem('user')),
    error:""
}

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload,
                error:""
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload,
                error:""
            }
        case LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated:false,
                user:localStorage.removeItem('user'),
                error:payload
            }
        case LOGOUT_SUCCESS:

            return{
                ...state,
                isAuthenticated:false,
                user:localStorage.removeItem('user'),
                error:""
            }
        default:
            return state;
    }
}