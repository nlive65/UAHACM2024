import React from "react";
import { useState, useEffect } from "react";

export const handleCamera = constraints=>{
    const [stream, setStream] = useState(null);
    const [err, setErr] = useState(null);
    useEffect(()=>{
        if(stream) return;
        let didCancel = false;
        const getUserCamera = async() =>{
            if(!didCancel){
                try{
                    setStream(await navigator.mediaDevices.getUserMedia(constraints));
                }
                catch(e){
                    setErr(e);
                    console.log(e);
                }
            }
        };
        const cancel = ()=>{
            didCancel = true;
            if(!stream) return;
            if(stream?.getVideoTracks){
                stream.getVideoTracks().map(track =>track.stop);
            }
            if(stream?.stop){
                stream.stop();
            }
        };
        getUserCamera();    
    })
};



function videoDetection(){
    
    return(
        <div></div>

    );
}