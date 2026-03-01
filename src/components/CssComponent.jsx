'use client';

import '@/styles/CssComponent.css';


export default function CssComponent()
{

  let isGreen = true;




  const elementStyle = 
  {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };


  return (
    <div>
        <p style={elementStyle}> This is How to apply Css Style </p>
        <p className={"orangeClass"}> This is How to apply Css Class </p>
        <p className={isGreen ? "greenClass" :"orangeClass"}> This is How to apply Css Class with Condition </p>
    </div>
  );
}
