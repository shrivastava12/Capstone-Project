import {  LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from "./Type";

import Axios from 'axios';


export const register = (email,password,fname,lname,location,mobileNo) => dispatch => {
    console.log('inside the registerrrrrrr');
    const date =  new Date();
    const id =  date.getFullYear()+date.getMilliseconds()
    try{
        Axios.post('http://localhost:8000/users/',{
            id:id,
            email:email,
            password:password,
            first_name:fname,
            last_name:lname,
            location:location,
            mobile_no:mobileNo
        }).then((res) => {
            console.log(res.status);
            if(res.status === 201){
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload:res.data
                })
            }
        })
    }catch(e){
        console.log(e)
    }
}


export const login =  (email,password) => dispatch => {
    console.log('inside the login');
    try{
        Axios.get('http://localhost:8000/users/').then(res => {
            console.log(res.data);
            if(res.status === 200){
                const abc =  res.data;
               const bcd =  abc.find(ele => ele.email === email && ele.password === password ) 
                    console.log('checking',bcd)
                 dispatch({
                     type:LOGIN_SUCCESS,
                     payload:bcd
                 })
            }
        })
    }catch(e){
        console.log('errr',e)
    }
}

export const logout = () => dispatch => {
    console.log('logout')
    
    dispatch({
        type:LOGOUT_SUCCESS
    })
    window.location.reload();
}