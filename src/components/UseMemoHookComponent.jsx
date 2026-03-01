'use client';

//Import React Library
import * as React from 'react';


//import Material UI Components
import TextField from '@mui/material/TextField';

export default function UseMemoHookComponent()
{

    const [inputName,setInputName] = React.useState("");
    const [inputAddress,setInputAddress] = React.useState("");

    //read address value when address state changed only not with every state changed or not with every render for component
    const cachedAddress = React.useMemo(() => 
        {
            console.log("Updated Cached Address after Input Address State changed only not with every render");

            return inputAddress;

        }, [inputAddress]);

    





    return(
        <>

        <h3>Use Memo Hook Component</h3>

        <p>UseMemo Used To Cache data and only update it when array or state changed not with every render</p>

        <TextField  id="name" name="name" label="Name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} margin="dense" variant="standard"  fullWidth required focused />

        <TextField  id="address" name="address" label="Address" type="text" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} margin="dense" variant="standard"  fullWidth required focused />

        <br/>

        {cachedAddress}

        <br/>
        



        

        
        </>

    );
}