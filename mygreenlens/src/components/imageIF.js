import React, { useState } from "react";
import { GetCamera } from "./getCamera";
import { Card, Container,Button,Offcanvas } from "react-bootstrap";
import axios from 'axios';
import data from './secret.json';
import { useEffect, useRef } from "react";

const DrawRectInFrame = (inputs)=>{
  if(inputs.bounds){
    let baseElement;
  if(inputs.stream){
    baseElement = document.getElementsByTagName('video')[0];
  }
  else{
    baseElement = document.getElementById('detectedImg');
  }
  if(inputs.bounds){
    console.log('made it');
    const canvases = inputs.bounds.predictions.map(element => {
      console.log('here');
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext('2d');
      canvas.height = element.height;
      canvas.width = element.width;
      ctx.drawImage(baseElement,0,0,element.x,element.y);
      ctx.beginPath();
      ctx.rect(element.x,element.y,element.width,element.height);
      ctx.strokeStyle='black';
      ctx.stroke();
      canvas.style.zIndex = 2;
      return canvas;
    });
  }
  }
  
}


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
        return(response);
      })
      .catch(function(error){
        console.log(error.message);
        console.log(base64File);
      })
    }

}

function VideoUploadHandler(props){
  const [frame, setFrame] = useState(null);
  const AIresponse= useRef(null);
  useEffect(()=>{
    const response = roboflowCall(frame);
    if(response){
      AIresponse.current = response;
    }
  },[frame]);

  return(
    <Container>
      <video id='webCamera'
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


function ImgUploadHandler(props){
  const [selectedImage, setSelectedImage] = useState(null);
  const responseContent = useRef(null);
  const [base64File, setBase64File] = useState(null);
  useEffect(()=>{
    const getResponse = async () =>{
      const response = await roboflowCall(base64File);
      responseContent.current = response;
      console.log(responseContent.current);  
    }
    
    getResponse();
  },[base64File]);
  
  return(
    <Container>
      <Card>
        <Card.Header>
          Upload Picture
        </Card.Header>
        <Card.Body>
        {selectedImage && (<img src={selectedImage} id='detectedImg' height={640} width={640}/> 
        )}
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
      <Card style={{ width: '36rem' }}>
        <Card.Title> <b>Demeter Recyclable Image Detection</b></Card.Title>
        <Card.Body>
        {error ? (
          <ImgUploadHandler stream={null}/>
      ) : (
          <VideoUploadHandler stream={stream}/>
      )}
        </Card.Body>
      </Card>
      <p><b>Any object that is outlined in a rectangle is recyclable</b></p>
      <p><div class="col-xl-12" style={{width: '64rem'}}>Please note that what can be directly recycled depends on area and size of the item. When in doubt, always check with local recycling centers:</div></p>
      <Button onClick={()=>window.open("https://search.earth911.com/")} style={{background:"#94aa5b", borderColor:"#94aa5b"}}>Find your Center</Button>
    </Container>
  );
}
