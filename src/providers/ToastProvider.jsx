"use client";

//import react library
import * as React from 'react';

//import Context
import { ToastContext } from "@/contexts/ToastContext.js";

//import Material UI Components
import ToastComponent from '@/components/pages/ToastComponent.jsx'

//2- Create Context Provider like Component to wrap consumed Components
export default function ToastProvider({ children }) 
{
  const [toastIsOpen, setToastIsOpen] = React.useState(false);
  const [toastPosition,setToastPosition] = React.useState({vertical:"bottom",horizontal:"left"});
  const [toastMessage, setToastMessage] = React.useState("Hello From Toast");
  const [toastType, setToastType] = React.useState("success");
  const [toastDuration, setToastDuration] = React.useState(6000);




  function showToast(message,type="success",duration=6000,positionVertical="bottom",positionHorizontal="left")
  {
      setToastPosition({vertical:positionVertical,horizontal:positionHorizontal});
      setToastMessage(message);
      setToastType(type);
      setToastDuration(duration);
      setToastIsOpen(true);
  }

  function hideToast()
  {
      setToastIsOpen(false);
  }
       
  

  return (
    <ToastContext.Provider value={{showToast,hideToast}}>

      {children}

      <ToastComponent toastIsOpen={toastIsOpen} 
                      toastMessage={toastMessage} 
                      toastType={toastType} 
                      toastDuration={toastDuration} 
                      onCloseToastCallback={hideToast} 
                      toastPositionVertical={toastPosition.vertical} 
                      toastPositionHorizontal={toastPosition.horizontal}/>

    </ToastContext.Provider>
  );
}
