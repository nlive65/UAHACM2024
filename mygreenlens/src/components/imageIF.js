import React from "react";
import { GetCamera } from "./getCamera";
import { Card, Container,Button } from "react-bootstrap";
import axios from 'axios';
import data from './secret.json';
import { useEffect, useRef } from "react";

export default function VideoDetector() {
  const apiKey = data['roboflowAPIKey'];
  const { stream, error } = GetCamera({ video: true });
  
  return (
    <Container>
      <Card>
        <Card.Title>Demeter Recyclable Image Detection</Card.Title>
        <Card.Body>
        {error ? (
        <p>error</p>
      ) : (
        <video
          autoPlay
          ref={video => {
            if (video) {
              video.srcObject = stream;
            }
          }}
        />
      )}
      
        </Card.Body>
      </Card>
      <p>Please note that what can be directly recycled depends on area and size of the item. When in doubt, always check with local recycling centers:</p>
      <Button onClick={()=>window.open("https://search.earth911.com/")} style={{background:"#94aa5b", borderColor:"#94aa5b"}}>Find your Center</Button>
    </Container>
  );
}
