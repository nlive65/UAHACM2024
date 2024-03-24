import React, {useState} from 'react'


import profile_icon from '../assets/profile_icon.png'
import user_icon from "../assets/person.png";
const Profile = ()=>{
    const [action,setAction]= useState("UpdateSettings");


    return(
       <div className="container">
           <div className="user">
               <img src={profile_icon} alt="profile icon"/>
           </div>
          <div className='counter'>
              <div className="row">
                  <div className="col-6 col-lg-3">
                      <h6 className="count h2"></h6>
                      <p>Plastic</p>
                  </div>
                  <div className="col-6 col-lg-3">
                      <h6 className="count h2"></h6>
                      <p>Paper</p>
                  </div>
                  <div className="col-6 col-lg-3">
                      <h6 className="count h2"></h6>
                      <p>Plastic</p>
                  </div>
                  <div className="col-6 col-lg-3">
                      <h6 className="count h2"></h6>
                      <p>Glass</p>
                  </div>
                  <div className="col-6 col-lg-3">
                      <h6 className="count h2"></h6>
                      <p>Cardboard</p>
                  </div>
              </div>

          </div>

       </div>


    );
};

export default Profile