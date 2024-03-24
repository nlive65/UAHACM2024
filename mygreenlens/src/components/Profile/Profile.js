import React, {useEffect, useState} from 'react'
import './Profile.css';

import profile_icon from '../assets/profile_icon.png'
import {collection,getDocs, updateDoc, doc} from "firebase/firestore";
import app,{ db, auth } from '../../firebase';

import {} from "firebase/firestore"
import {getAuth} from "firebase/auth";
import logout_Icon from '../assets/logout_icon.png'
import {useNavigate} from "react-router-dom";

const Profile = ({score})=>{
    const [action,setAction]= useState("");
    const [userProfile, setUserProfile]= useState("");
    const [newName, setNewName]= useState("");
    const [password, setPassword]= useState("");
    const [name, setName]= useState("");
    const [email, setEmail]= useState("")
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] =useState("");

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



    const fetchUserProfile = async () =>{
        try{

            if(auth.currentUser){
                const profileRef = collection(db, 'profiles')
                const querySnapshot = await getDocs(profileRef);
                querySnapshot.forEach((doc)=>{
                    const userData = doc.data();
                    if(userData.email=== auth.currentUser.email){
                        setEmail(userData.email);
                        setName(userData.name);
                    }
                });
            }
        }catch(error){
            console.error('Error fetching user profile:', error.message);
        }
    };


   const handleNameChange = (e)=> {
       setNewName(e.target.value);
   }

   // const updateProfile= async () =>{
   //     try{
   //         const docRef = db.collection('users').doc(currentUser.uid);
   //         const doc= await docRef.get();
   //         if(!doc.exists){
   //             await docRef.set({
   //                 email: currentUser.email,
   //                 name: currentUser.name,
   //
   //             })
   //         }
   //         // await updateDoc(doc(db,'users', userProfile.id), {
   //         //     name: newName,
   //         // });
   //         // setUserProfile({...userProfile, name: newName});
   //         // setNewName("");
   //
   //     }catch(error){
   //         console.error('Error updating profile:', error.message);
   //     }
   //
   // }
   //  // if(!userProfile){
   //  //     return <div>Loading...</div>;
   //  // }


    return (
        <div className="user-card">
            <div className="gradient">
                <div className="profile-down">
                    <img src={profile_icon} alt="profile icon"/>
                    <div className="profile-title">Name: {name}</div>
                    <div className="profile-title">Email: {email}</div>
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