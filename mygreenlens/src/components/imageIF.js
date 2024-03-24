import React, { useState } from "react";
import { GetCamera } from "./getCamera";
import { Card, Container,Button,Offcanvas } from "react-bootstrap";
import axios from 'axios';
import data from './secret.json';
import { useEffect, useRef } from "react";

const roboflowCall = (base64File)=>{
  console.log(base64File);
    if(base64File){
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/recycleitemsreal/1",
        params: {
          api_key:  data['roboflowAPIKey'],
        },
        data: base64File,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function(response){
        console.log(response.data);
        
      })
      .catch(function(error){
        console.log(error.message);
        console.log(base64File);
        return(
          <></>
        );
      })
    }

}

function VideoUploadHandler(props){
  const [frame, setFrame] = useState(null);
  useEffect(()=>{
    roboflowCall(frame);

  },[frame])
  return(
    <Container>
      <video
          autoPlay
          ref={video => {
            if (video) {
              video.srcObject = props.stream;
            }
          }}
        />
        <br></br>
      <Button onClick={()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const videoElem = document.getElementsByTagName('video')[0];
        canvas.height = videoElem.videoHeight;
        canvas.width = videoElem.videoWidth;
        ctx.drawImage(videoElem, 0, 0);
        canvas.toBlob(blob=> {
            console.log(blob);
              const reader = new FileReader();
              reader.addEventListener('load',(e)=>{
                setFrame(e.target.result);
            });
              reader.readAsDataURL(blob);
            //storage.push(blob);
        });
        
      }} style={{background:"#94aa5b", borderColor:"#94aa5b"}}>Take Snapshot</Button>
    </Container>
  )
}


function ImgUploadHandler(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseContent, setResponseContent] = useState(null);
  const [base64File, setBase64File] = useState(null);
  useEffect(()=>{
    roboflowCall(base64File);
  },[base64File]);
  
  return(
    <Container>
      <Card>
        <Card.Header>
          Upload Picture
        </Card.Header>
        <Card.Body>
        {selectedImage && (<img src={selectedImage} height={640} width={640}/>)}
        <br></br>
        <input type="file" onChange={(event)=>{
          setSelectedImage(null);
          const file = event.target.files[0];
          const imgUrl = URL.createObjectURL(file);
          const reader = new FileReader();
          reader.addEventListener('load',(e)=>{
            setBase64File(e.target.result);
          })
          reader.readAsDataURL(file); 
          
          setSelectedImage(imgUrl);
          
        }} />
        </Card.Body>
      </Card>
    </Container>
  );
}


export default function VideoDetector() {
  const apiKey = data['roboflowAPIKey'];
  const { stream, error } = GetCamera({ video: true });
  if(!error){

  }
  return (
    <Container>
      <Card>
        <Card.Title>Demeter Recyclable Image Detection</Card.Title>
        <Card.Body>
        {error ? (
          <ImgUploadHandler />
      ) : (
          <VideoUploadHandler stream={stream}/>
      )}
        </Card.Body>
      </Card>
      <p>Please note that what can be directly recycled depends on area and size of the item. When in doubt, always check with local recycling centers:</p>
      <Button onClick={()=>window.open("https://search.earth911.com/")} style={{background:"#94aa5b", borderColor:"#94aa5b"}}>Find your Center</Button>
    </Container>
  );
}
