import React, { useState } from "react";
import { GetCamera } from "./getCamera";
import { Card, Container,Button} from "react-bootstrap";
import axios from 'axios';
import data from './secret.json';
import { useEffect, useRef } from "react";


function removeBoxes(parentNode){
  const currBoxes = parentNode.querySelectorAll('.bounding-box');
    currBoxes.forEach(element=>{
      parentNode.removeChild(element);
    });
}

const DrawRectInFrame = (inputs)=>{
  let baseElement;
  if(inputs.stream){
    baseElement = document.getElementById('image');
    if(!baseElement){
      baseElement=document.getElementsByTagName('video')[0];
    }
    if(inputs.bounds){
      const img = inputs.bounds.data.image;
      const scaleX = 640/img.width;
      const scaleY = 640/img.height;
      const prediction = inputs.bounds.data.predictions;
      const parentNode = baseElement.parentNode;
      removeBoxes(parentNode);
      prediction.forEach(element => {
        const rect = document.createElement('div');
        rect.classList.add('bounding-box');
        rect.style.position = 'absolute';
        rect.style.left = `${element.x - element.width}px`;
        rect.style.bottom = `${element.y - element.height*0.25}px`;
        rect.style.width = `${element.width*scaleX}px`;
        rect.style.height = `${element.height*scaleY}px`;
        rect.style.border = '2px solid red'; // Adjust styling as needed
        rect.style.zIndex =500;
        baseElement.parentNode.appendChild(rect);
      });
    }
  }
  else{
    baseElement = document.getElementById('detectedImg');if(inputs.bounds){
      const img = inputs.bounds.data.image;
      const scaleX = 640/img.width;
      const scaleY = 640/img.height;
      const prediction = inputs.bounds.data.predictions;
      const parentNode = baseElement.parentNode;
      removeBoxes(parentNode);
      prediction.forEach(element => {
        const rect = document.createElement('div');
        rect.classList.add('bounding-box');
        rect.style.position = 'absolute';
        rect.style.left = `${element.x + element.width*0.5}px`;
        rect.style.bottom = `${element.y - element.height*0.25}px`;
        rect.style.width = `${element.width*scaleX}px`;
        rect.style.height = `${element.height*scaleY}px`;
        rect.style.border = '2px solid red'; // Adjust styling as needed
        rect.style.zIndex =500;
        baseElement.parentNode.appendChild(rect);
      });
    }
  }
  
}


const roboflowCall = (base64File,callback)=>{
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
        callback(response);
      })
      .catch(function(error){
        console.log(error.message);
        console.log(base64File);
        
      })
    }
}

function VideoUploadHandler(props){
  const [frame, setFrame] = useState(null);
  const [isSnapshot,setSnapshot] = useState(null);
  const [buttonTxt,setButtonTxt] = useState('Take Snapshot');
  const AIresponse= useRef(null);
  useEffect(()=>{
    const response = roboflowCall(frame,(response)=>{
      if(response){
        AIresponse.current = response;
        const inputs = {bounds: AIresponse.current, stream:props.stream}
        DrawRectInFrame(inputs);
      };
    });
    
  },[frame]);


  useEffect(()=>{
    if(isSnapshot){
      setButtonTxt('Retake');
    }
    else{
      setButtonTxt('Take Snapshot');
    }
  },[isSnapshot])
  return(
    <Container>
      {isSnapshot ? <img src={frame}  height={640} width={640} id='image'/> : <video id='webCamera'
          autoPlay height={640} width={640}
          ref={video => {
            if (video) {
              video.srcObject = props.stream;
            }
          }}
        />}
      
        <br></br>
      <Button  onClick={()=>{
        if(isSnapshot){
          setSnapshot(false);
          const parentNode =document.baseElement = document.getElementById('image').parentNode;
          removeBoxes(parentNode);
          return;
        }
        setSnapshot(true);
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
      }} style={{background:"#94aa5b", borderColor:"#94aa5b"}} >{buttonTxt}</Button>
    </Container>
  )
}


function ImgUploadHandler(props){
  const [selectedImage, setSelectedImage] = useState(null);
  const responseContent = useRef(null);
  const [base64File, setBase64File] = useState(null);
  useEffect(()=>{
      roboflowCall(base64File,(response)=>{
      if(response){
        responseContent.current = response;
        console.log(responseContent.current);
        const inputs = {bounds: responseContent.current, stream:null}
        DrawRectInFrame(inputs);
      }
      });
      
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
          if(file){
            const imgUrl = URL.createObjectURL(file);
            setSelectedImage(imgUrl);
            const reader = new FileReader();
            reader.addEventListener('load',(e)=>{
            setBase64File(e.target.result);
          })
            reader.readAsDataURL(file); 
          
          }
          else{
            const baseElement = document.getElementById('detectedImg').parentNode;
            removeBoxes(baseElement);
          }
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
    <Container style={{ backgroundColor: '#fffdd0', minHeight: '100vh' }}>
      <Card style={{width:'700px'}}>
        <Card.Title> <b>Demeter Recyclable Image Detection</b></Card.Title>
        <Card.Body>
        {error ? (
          <ImgUploadHandler stream={null}/>
      ) : (
          <VideoUploadHandler stream={stream}/>
      )}
        </Card.Body>
      </Card>
      <p><b>Any object that is outlined in a rectangle is recyclable. The rectangle may be incorrectly placed</b></p>
      <p><div class="col-xl-12" style={{width: '64rem'}}>Please note that what can be directly recycled depends on area and size of the item. When in doubt, always check with local recycling centers:</div></p>
      <Button onClick={()=>window.open("https://search.earth911.com/")} style={{background:"#94aa5b", borderColor:"#94aa5b"}}>Find your Center</Button>
    </Container>
  );
}
