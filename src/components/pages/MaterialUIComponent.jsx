'use client';

//import react
import {useState, useContext } from "react";
import { AppThemeContext } from "@/contexts/AppThemeContext";

//import material ui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

//import material ui components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from '@mui/material/Slider';


export default function MaterialUIComponent() 
{
  const { mode, toggleTheme } = useContext(AppThemeContext);

  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {setValue(newValue);};

  return (
    <>
      <h3>
        Material UI Component
        <IconButton onClick={toggleTheme} color="inherit">
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      </h3>
      
      <Stack direction="row" spacing={2}>
        <Button color="secondary" startIcon={<SendIcon />}>
          Secondary
        </Button>
        <Button variant="contained" color="success" startIcon={<SendIcon />}>
          Success
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Error
        </Button>
      </Stack>

      <hr />

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <hr />

      <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        
      />
    </Box>






    </>
  );
}
