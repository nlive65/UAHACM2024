import { useRef,useEffect } from "react";
import React from "react";

export default function Canvas(props){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2D');

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },[]);
    
    return(
        <canvas ref={canvasRef} {...props}></canvas>
    );
}