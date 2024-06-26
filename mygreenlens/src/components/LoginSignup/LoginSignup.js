import React, {useState} from "react";
import './LoginSignup.css';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import 'firebase/auth'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pw_icon from '../assets/password.png'
import {auth} from "../../firebase";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";


const LoginSignup = ()=> {
    const [errorText, setErrorText]=useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    const handleLogin = async () => {
        try {
            if(email.length==0 || password.length==0){
                setErrorText("Enter Email");
                return;
            }
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to profile page upon successful login
            navigate('/profile');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };
    const handleSignup = async () => {
        try {
            // if(name.length ===0 || email.length===0|| password.length===0){
            //     setErrorText("Enter name, email, and password");
            //     return;
            // }
            await createUserWithEmailAndPassword(auth, email, password);
            const db= getFirestore();
            const userRef = doc(collection(db, 'users'));
            await setDoc(userRef, {
                email: email,
                password: password,
                name: name,
                score: score
            });

            navigate('/profile');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };
    const handleForgotPassword = async() =>{
        try{
            navigate('/ForgotPassword')

        }catch(error){
            console.error('Error signing up:', error.message);
        }
    }

    return (
        <div className='container' style={{ backgroundColor: '#fffdd0', minHeight: '100vh' }}>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {<div className="input">
                    <img src={user_icon} alt=""/>
                    <input value={name} type="name" placeholder="Name" type="text"
                           onChange={(e) => {
                               setName(e.target.value)
                               setErrorText("")
                           }}/>

                </div>}

                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input value={email} type="email" placeholder="Email Id"
                           onChange={(e) => {
                               setEmail(e.target.value)
                               setErrorText("")
                           }}/>

                </div>
                <div className='input'>
                    <img src={pw_icon} alt=""/>
                    <input type="password" placeholder="Password" value={password}
                           onChange={(e) => {
                               setPassword(e.target.value)
                               setErrorText("")
                           }}/>
                </div>

            </div>

            {<div className="forgot_password" onClick={() => handleForgotPassword()}>Forgot
                Password? <span>Click Here!</span></div>}

            <div className="submit_container">
                <div className={"submit"} onClick={() => handleSignup()}>Sign Up</div>
                <div className={"submit"} onClick={() => handleLogin()}>Login</div>
            </div>
        </div>


    );
};
export default LoginSignup