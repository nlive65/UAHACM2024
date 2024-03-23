import React, {useState} from "react";
import './LoginSignup.css';

import user_icon from '..assets/user_icon.png'
import email_icon from '..assets/email_icon.png'
import pw_icon from '..assets/password_icon.png'
const LoginSignup = ()=> {
    const [action,setAction]= useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className='input'>
                    <img src={pw_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="sumbit_container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>

    );
};
export default LoginSignup