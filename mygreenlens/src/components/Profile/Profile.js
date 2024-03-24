import React, {useState} from 'react'
import './Profile.css';

import profile_icon from '../assets/profile_icon.png'
import {collection, addDoc} from "firebase/firestore";
import {} from "firebase/firestore"

const Profile = ()=>{
    const [action,setAction]= useState("UpdateSettings");
    // auth.currentUser.uid

    return(
       <div className="container">
           <div className="row">
               <div className="col col-md-9 col-lg-7 col-xl-5">
                   <div className="card">
                       <div class="card-body">
                           <div className="flex-shrink-0">
                               <img src={profile_icon} alt="profile icon" class="image"/>
                           </div>
                           <div className="">

                           </div>
                       </div>
                   </div>
               </div>
           </div>


          {/*<div className='counter'>*/}
          {/*    <div className="row">*/}
          {/*        <div className="col-6 col-lg-3">*/}
          {/*            <h6 className="count h2"></h6>*/}
          {/*            <p>Plastic</p>*/}
          {/*        </div>*/}
          {/*        <div className="col-6 col-lg-3">*/}
          {/*            <h6 className="count h2"></h6>*/}
          {/*            <p>Paper</p>*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*</div>*/}

       </div>


    )
}

export default Profile