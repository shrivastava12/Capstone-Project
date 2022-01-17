import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';

import thunk from "redux-thunk";

const user =  JSON.parse(localStorage.getItem('user'))

const initialState = {
    auth:{
        user:user,
        isAuthenticated: user ? true : false
    }
};

const middleware =  [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));


export default store;