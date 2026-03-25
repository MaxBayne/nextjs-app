'use client';

import { useState } from "react";

export default function UseStateHookWithArraysComponent()
{
    //Sate To Hold the new item to be added from input
    const [itemToAdd,SetItemToAdd] = useState("");

    //Sate to Hold items Array
    const [items, setItems] = useState(["item 1","item 2","item 3"]);

    const itemsList = items.map((item,index) => 
    {
        return <li key={index}>{item} <button onClick={()=>{handleRemoveItem(index);}}>x</button> <button onClick={()=>{handleEditItem(item);}}>E</button> </li> 
    })


    function handleAddItem()
    {
        setItems([...items,itemToAdd]);
        SetItemToAdd("");
    }

    function handleRemoveItem(itemIndex)
    {
        //create new copy of array that hold items expect the item we need to delete
        let newItems = items.filter((item,index) => index !== itemIndex);

        //update items state
        setItems(newItems);
    }

    function handleEditItem(oldItem)
    {
        //Edit new Copy of Array
        const updatedArray = items.map((item)=>
            {
                if(oldItem === item)
                {
                    let updatedItem=item + " edited ";
                    return updatedItem;
                }
                else
                {
                    return item;
                }
        });

        //Store Updated Array inside State
        setItems(updatedArray);


    }

    const containerStyle={
        textAlign: "-webkit-center"

    };
    const ulStyle = {
        width: "200px",
        
    };

    return (

        <div style={containerStyle}>

            <div style={ulStyle}>

            <h3>Items Array</h3>
            <ul>
                {itemsList}
            </ul>

            <input name="txtItemToAdd" type="text" value={itemToAdd} onChange={(e) => SetItemToAdd(e.target.value)}/>
            <button onClick={handleAddItem}>Add</button>

            </div>

        </div>

            
        

        

    );
}