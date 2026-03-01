'use client';

//import Styles
import '@/styles/NewProductModalComponent.css'

//Import React Library
import * as React from 'react';

//Import Other Library
import { v4 as uuidv4 } from 'uuid';

//Import Material UI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

//import Material UI Components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';



export default function RemoveProductModalComponent(props)
{
    //Read Parameters For Component from props
    const {openModalState,closeModalCallBack,productForRemove,onValidRemoveProductCallBack} = props;

     if (!productForRemove) return null; // 🔒 critical guard


    return(
         <Dialog open={openModalState} onClose={closeModalCallBack} fullWidth="true" maxWidth="sm">
        <DialogTitle>Are you Sure Delete Product ({productForRemove.name})?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Press (Yes) For  Deleting , otherwise (No) to Cancel Process
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModalCallBack} variant='text' startIcon={<DisabledByDefaultIcon />}>
            No
          </Button>
          <Button onClick={()=>{onValidRemoveProductCallBack(productForRemove);}} variant='text' color='error' startIcon={<DeleteIcon />}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

    );
}