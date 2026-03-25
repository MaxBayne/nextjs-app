'use client';

//import react
import {useState, useContext } from "react";
import { AppThemeContext } from "@/contexts/AppThemeContext";

//import lucide icons
import { ArrowUpIcon } from "lucide-react"

//import shad CN ui components
import { Button } from "@/components/ui/button"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList,} from "@/components/ui/combobox"



export default function ShadCNComponent() 
{
 
  const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]


  return (
    <>
      <Button variant="outline">
        <ArrowUpIcon /> Click me
      </Button>


      <br/>
      <br/>

      <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>


    </>
  );
}
