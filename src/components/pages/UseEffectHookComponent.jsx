'use client';

//Import React Library
import * as React from 'react';


//import Material UI Components
import TextField from '@mui/material/TextField';

export default function UseEffectHookComponent()
{

    const [inputName,setInputName] = React.useState("");
    const [inputAddress,setInputAddress] = React.useState("");

    React.useEffect(() => 
        {
            console.log("Component Rendered Only After [inputName] State Changed");

        }, [inputName]);

    





    return(
        <>

        <h3>Use Effect Hook Component</h3>

        <p>UseEffect Used To Call Function depend on changes for array or state</p>

        <TextField  id="name" name="name" label="Name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} margin="dense" variant="standard"  fullWidth required focused />

        <TextField  id="address" name="address" label="Address" type="text" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} margin="dense" variant="standard"  fullWidth required focused />

        <br/>
        



        

        
        </>

    );
}