import { useRef,useEffect } from "react";
import React from "react";

export default function canvas(props){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2D');
    });
    
    return(
        <canvas ref={canvasRef}></canvas>
    );
}