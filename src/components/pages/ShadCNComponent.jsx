'use client';

//import react
import {useState, useContext } from "react";
import { AppThemeContext } from "@/contexts/AppThemeContext";

//import lucide icons
import { ArrowUpIcon } from "lucide-react"

//import shad CN ui components
import { Button } from "@/components/ui/button"



export default function ShadCNComponent() 
{
 

  return (
    <>
      <Button variant="outline">
        <ArrowUpIcon /> Click me
      </Button>


    </>
  );
}
