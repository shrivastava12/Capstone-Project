
import { useState } from 'react';
import background from '../image/background.png';

const Login = () => {

    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const [isSignedIn, setISSignedIn] = useState(false);
    const onClick = () => {
        setISSignedIn(!isSignedIn)
    }
    return (
        <div style={myStyle}>
            {
                isSignedIn ? (
                    <div className="  h-100 d-flex justify-content-center align-items-center ">
                        <div style={{
                            'background': 'rgba(0, 0, 0, 0.26)', 'width': '500px',
                            'height': '500px',
                            'left': '226px',
                            'top': ' 231px',
                        }}>
                            <div className='p-5 m-3 '>
                                <h2 className="text-center" style={{ 'backgroundColor': '#C4C4C4', 'height': '40px', 'fontSize': '24px' }}>Logo</h2>
                                <h2 className='mt-5' style={{ 'font': 'Robot', 'fontWeight': '500', 'fontSize': '28px', 'color': '#fff' }}>Sign In</h2>

                                <form className="mt-4">

                                    <label style={{ 'color': '#fff', 'margin': '0px' }}>Username</label><br />
                                    <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff', 'width': '90%' }} type="text" />
                                    <br />
                                    <br />
                                    <label style={{ 'color': '#fff', 'margin': '0px' }}>Password</label><br />
                                    <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'width': '90%', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff' }} type="text" />

                                </form>
                                <div className='text-center mt-5'>
                                    <button style={{ 'width': '90%', 'height': '40px', 'padding': '10px', 'margin': '0', 'border': 'none', 'borderRadius': '40px', 'background': 'rgba(62, 237, 80, 0.81)', 'color': '#fff', 'fontWeight': 'bold' }}>Sign In</button>
                                    <p onClick={onClick} className='mt-4' style={{ 'color': '#fff' }}>Don't have account? Sign up</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="  h-100 d-flex justify-content-center align-items-center ">
                        <div style={{
                            'background': 'rgba(0, 0, 0, 0.26)', 'width': '500px',
                            'height': '500px',
                            'left': '226px',
                            'top': ' 231px',
                        }}>
                            <div className='p-5 m-3 '>
                                <h2 className="text-center" style={{ 'backgroundColor': '#C4C4C4', 'height': '40px', 'fontSize': '24px' }}>Logo</h2>
                                <h2 className='mt-3' style={{ 'font': 'Robot', 'fontWeight': '500', 'fontSize': '28px', 'color': '#fff' }}>Sign Up</h2>

                                <form className="mt-4">
                                    <div className='form-row'>

                                        <div className='form-group col-md-6'>
                                            <label style={{ 'color': '#fff', 'margin': '0px' }}>Name</label>
                                            <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff' }} type="text" />

                                        </div>
                                        <div className='form-group col-md-6'>
                                        <label style={{ 'color': '#fff', 'margin': '0px' }}>Email</label>
                                        <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff' }} type="text" />
                                        </div>
                                       
                                    </div>

                                    <div className='form-row'>
                                        <div className='form-group col-md-6'>
                                        <label style={{ 'color': '#fff', 'margin': '0px' }}>Password</label>
                                    <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff' }} type="text" />
                                        </div>
                                        <div className='form-group col-md-6'>
                                        <label style={{ 'color': '#fff', 'margin': '0px' }}>Mobile</label>
                                    <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff' }} type="text" />
                                        </div>
                                    </div>
                                   

                                    

                                    {/* <label style={{ 'color': '#fff', 'margin': '0px' }}>Location </label>
                                    <input style={{ 'border': 'none', 'padding': '12px 20x', 'borderBottom': '1px solid white', 'backgroundColor': 'transparent', 'outline': '0px', 'color': '#fff','width':'100%' }} type="text" /> */}

                                </form>
                                <div className='text-center mt-5'>
                                    <button style={{ 'width': '90%', 'height': '40px', 'padding': '10px', 'margin': '0', 'border': 'none', 'borderRadius': '40px', 'background': 'rgba(62, 237, 80, 0.81)', 'color': '#fff', 'fontWeight': 'bold' }}>Sign Up</button>
                                    <p onClick={onClick} className='mt-4' style={{ 'color': '#fff' }}>have an account? Sign Up</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
};

export default Login;

