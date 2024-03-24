import React, {useState} from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth"
import {useNavigate} from "react-router-dom";


import 'firebase/auth'
import email_icon from "../assets/email.png";


function ForgotPassword(){
    const navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [msgSent, setMsgSent] = useState(false);
    let [attempts, setAttempts] = useState(0);
    let [error, setErrorText] = useState("");

    const handleSendEmail= async() =>{
        try{
            if(email.length === 0){
                console.log("Invalid Email");
                return;
            }
            sendPasswordResetEmail(getAuth(), email).then(()=>{
                setMsgSent(true);
                }, () =>{
                if(attempts == 3){
                    console.log("Invalid number of tries. Please try again later.");

                }else{
                    console.log("Invalid email, try again!");
                }
                attempts++;
            })
        }catch(error){
            console.log("invalid email sent", error);
        }

    }

    return (
        <div className="container">
            <h2>Forgot Password</h2>

            <div className="inputs">
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input value={email} type="email" placeholder="Email Id"
                           onChange={(e) => {
                               setEmail(e.target.value)
                               setErrorText("")
                           }}/>

                </div>
                <button onClick={handleSendEmail}>Send Reset Email</button>
                {msgSent &&<p>Password reset email sent. Check your inbox.</p>}

            </div>

        </div>


    )
}

export default ForgotPassword