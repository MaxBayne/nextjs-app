'use client';

//import Styles
import '@/styles/NewProductModalComponent.css'

//Import React Library
import * as React from 'react';

//Import Other Library
import { v4 as uuidv4 } from 'uuid';

//Import Material UI Icons
import SaveIcon from '@mui/icons-material/Save';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

//import Material UI Components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function NewProductModalComponent(props)
{
    //Read Parameters For Component from props
    const {openModalState,closeModalCallBack,onValidNewProductCallBack} = props;

    //Create Form State to hold Form Inputs values
    const [formInputs, setFormInputs] = React.useState({name: "", price: "", description: ""});

    function resetFormInputs(){
        setFormInputs({name: "", price: "", description: ""});
    }
    function handleFormSubmit(e)
    {
        e.preventDefault();


        //make validation for form inputs

        const newProduct ={
            id: uuidv4(),
            name: formInputs.name,
            price: formInputs.price,
            description: formInputs.description,
        };

        resetFormInputs();

        onValidNewProductCallBack(newProduct);
    }
    



    return(
         <Dialog open={openModalState} onClose={closeModalCallBack} fullWidth="true" maxWidth="sm">
        <DialogTitle>New Product</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Fill Form Below To Create New Product
          </DialogContentText>
          <br/>
          <form id="frm_create_new_product" onSubmit={handleFormSubmit}>
            <TextField  id="name" name="name" label="Name" type="text" value={formInputs.name} onChange={(e) => setFormInputs({...formInputs,name: e.target.value})} margin="dense" variant="outlined"  fullWidth required focused />
            <TextField  id="price" name="price" label="Price" type="number" value={formInputs.price} onChange={(e) => setFormInputs({...formInputs,price: e.target.value})}  margin="dense" variant="outlined"  fullWidth  required />
            <TextField  id="description" name="description" label="Description" type="text" value={formInputs.description} onChange={(e) => setFormInputs({...formInputs,description: e.target.value})}  margin="dense" variant="outlined" fullWidth multiline rows={3} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type='reset' onClick={closeModalCallBack} variant='text' startIcon={<DisabledByDefaultIcon />}>
            Cancel
          </Button>
          <Button type="submit" form="frm_create_new_product" variant='text' startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    );
}