import React, {useState} from "react";
import './LoginSignup.css';
import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from 'firebase/compat/app';
import 'firebase/auth'

import Profile from '../Profile/Profile';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pw_icon from '../assets/password.png'


const LoginSignup = ()=> {
    const [action,setAction]= useState("Sign Up");

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const user = firebase.auth().currentUser;

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // Redirect to profile page upon successful login
            navigate('/profile');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };
    const handleSignup = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Redirect to profile page upon successful signup
            navigate('/profile');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=""/>
                    <input placeholder="Name" type="text" />
                </div>}

                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className='input'>
                    <img src={pw_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            {action==="Sign Up"?<div></div>: <div className="forgot_password" onClick={()=>{}}>Forgot Password? <span>Click Here!</span> </div>}

            <div className="submit_container">
                <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>


    );
};
export default LoginSignup