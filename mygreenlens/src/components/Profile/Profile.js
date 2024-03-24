import React, {useEffect, useState} from 'react'
import './Profile.css';

import profile_icon from '../assets/profile_icon.png'
import {collection,getDocs, updateDoc, doc} from "firebase/firestore";
import app,{ db, auth } from '../../firebase';

import {} from "firebase/firestore"
import logout_Icon from '../assets/logout_icon.png'
import {useNavigate} from "react-router-dom";

const Profile = ()=>{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("")
    const [score, setScore]= useState("")
    const navigate = useNavigate();

    const buttonNav=[
        { name: 'Sign Out', icon:logout_Icon, clickHandler:handleSignout, disability:false}
    ]

    async function handleSignout(){
        auth.signOut().then(()=>{
            navigate('/login');
        }, () => { console.error("Could not sign out");
        });
    }

    useEffect(()=>
    {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () =>{
        try{
            if(auth.currentUser){
                const profileRef = collection(db, 'users')
                const querySnapshot = await getDocs(profileRef);
                querySnapshot.forEach(doc=>{
                    const userData = doc.data();
                    if(userData.email=== auth.currentUser.email){
                        setEmail(userData.email);
                        setName(userData.name);
                        setScore(userData.score);
                    }
                });
            }
        }catch(error){
            console.error('Error fetching user profile:', error.message);
        }
    };

    return (
        <div className="user-card">
            <div className="gradient">
                <div className="profile-down">
                    <img src={profile_icon} alt="profile icon"/>
                    <div className="profile-title">Name: {name}</div>
                    <div className="profile-title">Email: {email}</div>
                    <div className="profile-title">Score: {score}</div>
                </div>
                <div className="signout_container">
                    <div className="signout" onClick={handleSignout}>
                        Sign Out!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile