'use client';

import { useState } from "react";

export default function UseStateHookComponent()
{

    //name for read Value and will be the key  , setName for setValue
    const [name, setName] = useState("mohammed");
    const [email, setEmail] = useState("mail@gmail.com");


    return (
        <div>
            Name: {name} , Email: <input type="text" value={email} onChange={OnInputChanged} />
            <br/>
            <span>{email}</span>
            <br/>
            <button onClick={ChangeName} >Change</button>
        </div>
    );


    function ChangeName()
    {
        setName("Mohammed Salah");
    }

    function OnInputChanged(event)
    {
        setEmail(event.target.value);
    }

}