import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render,fireEvent,cleanup} from '@testing-library/react';
import Navs from '../Components/Nav/Navs';
import Profile from '../Pages/Profile';

afterEach(cleanup);


const loginState =  {
    isAuthenticated:false,
    user:JSON.parse(localStorage.getItem('user')),
    error:""
};

function reducer(state=loginState,action){
    const {type,payload} = action;
    switch (type) {
           case 'REGISTER_SUCCESS':
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload,
                error:""
            }
        case 'LOGIN_SUCCESS':
            localStorage.setItem('user',JSON.stringify(payload));
            return{
                ...state,
                isAuthenticated:true,
                user:payload,
                error:""
            }
        case 'LOGIN_FAIL':
            return{
                ...state,
                isAuthenticated:false,
                user:localStorage.removeItem('user'),
                error:payload
            }
        case 'LOGOUT_SUCCESS':

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

function renderWithRedux(
    component,{initialState,store=createStore(reducer,initialState)} = {}
){
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    };
}


it('Render username  text correctly',() => {
    const {getByTestId} = renderWithRedux(<Profile/>,{
        initialState:{auth:{
 isAuthenticated:true,
             user:{
                 email: "abc@gmail.com",
                first_name: "Pankaj",
                id: "1",
                last_name: "shrivastava",
                location: "Earth",
                mobile_no: "7479530699",
                password: "1234"
             },
    error:""
        }
           
        }
    });
    expect(getByTestId('username')).toHaveTextContent('Pankaj shrivastava')
})

it('Render email  text correctly',() => {
    const {getByTestId} = renderWithRedux(<Profile/>,{
        initialState:{auth:{
 isAuthenticated:true,
             user:{
                 email: "abc@gmail.com",
                first_name: "Pankaj",
                id: "1",
                last_name: "shrivastava",
                location: "Earth",
                mobile_no: "7479530699",
                password: "1234"
             },
    error:""
        }
           
        }
    });
    expect(getByTestId('email')).toHaveTextContent('abc@gmail.com')
})

it('Render mobile  text correctly',() => {
    const {getByTestId} = renderWithRedux(<Profile/>,{
        initialState:{auth:{
 isAuthenticated:true,
             user:{
                 email: "abc@gmail.com",
                first_name: "Pankaj",
                id: "1",
                last_name: "shrivastava",
                location: "Earth",
                mobile_no: "7479530699",
                password: "1234"
             },
    error:""
        }
           
        }
    });
    expect(getByTestId('mobile')).toHaveTextContent('+91 7479530699')
})


it('Render location text correctly',() => {
    const {getByTestId} = renderWithRedux(<Profile/>,{
        initialState:{auth:{
 isAuthenticated:true,
             user:{
                 email: "abc@gmail.com",
                first_name: "Pankaj",
                id: "1",
                last_name: "shrivastava",
                location: "Earth",
                mobile_no: "7479530699",
                password: "1234"
             },
    error:""
        }
           
        }
    });
    expect(getByTestId('location')).toHaveTextContent('Earth')
})

it('Creating SnapShot of Profile',() => {
    const tree = renderWithRedux(<Profile/>,{
        initialState:{auth:{
 isAuthenticated:true,
             user:{
                 email: "abc@gmail.com",
                first_name: "Pankaj",
                id: "1",
                last_name: "shrivastava",
                location: "Earth",
                mobile_no: "7479530699",
                password: "1234"
             },
    error:""
        }
           
        }
    })
    expect(tree).toMatchSnapshot();
})
