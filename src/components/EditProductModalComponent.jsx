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


export default function EditProductModalComponent(props)
{
    //Read Parameters For Component from props
    const {openModalState,closeModalCallBack,productForEdit,onValidEditProductCallBack} = props;

    //Create Form State to hold Form Inputs values
    const [formInputs, setFormInputs] = React.useState(
      {
        id: '',
        name: '',
        price: '',
        description: '',
      });

     // ✅ Sync state when product changes
    React.useEffect(() => 
      {
        if (productForEdit) 
          {
            setFormInputs({id: productForEdit.id,name: productForEdit.name,price: productForEdit.price,description: productForEdit.description});
          }
      }, [productForEdit]);


    function handleFormSubmit(e)
    {
        e.preventDefault();


        //make validation for form inputs

        const modifiedProduct = { ...formInputs };
        
        onValidEditProductCallBack(modifiedProduct);
    }
    



    return(
         <Dialog open={openModalState} onClose={closeModalCallBack} fullWidth="true" maxWidth="sm">
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Fill Form Below To Edit Product
          </DialogContentText>
          <br/>
          <form id="frm_edit_product" onSubmit={handleFormSubmit}>
            <TextField  id="name" name="name" label="Name" type="text" value={formInputs.name} onChange={(e) => setFormInputs({...formInputs,name: e.target.value})} margin="dense" variant="outlined"  fullWidth required focused />
            <TextField  id="price" name="price" label="Price" type="number" value={formInputs.price} onChange={(e) => setFormInputs({...formInputs,price: e.target.value})}  margin="dense" variant="outlined"  fullWidth  required />
            <TextField  id="description" name="description" label="Description" type="text" value={formInputs.description} onChange={(e) => setFormInputs({...formInputs,description: e.target.value})}  margin="dense" variant="outlined" fullWidth multiline rows={3} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type='reset' onClick={closeModalCallBack} variant='text' startIcon={<DisabledByDefaultIcon />}>
            Cancel
          </Button>
          <Button type="submit" form="frm_edit_product" variant='text' startIcon={<SaveIcon />}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

    );
}