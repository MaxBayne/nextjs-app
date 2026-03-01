'use client';

//Import Styles
import '@/styles/ProductsListComponent.css'

//Import React Library
import * as React from 'react';

//Import Custom Hooks
import {useProductsHook} from '@/hooks/useProductsHook.js';
import {useToastHook} from '@/hooks/useToastHook.js';


//Import Material UI Icons
import AddIcon from '@mui/icons-material/Add';

//Import Material UI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';


//Import Custom Components
import ProductCardComponent from './ProductCardComponent.jsx'
import NewProductModalComponent from './NewProductModalComponent.jsx';
import EditProductModalComponent from './EditProductModalComponent.jsx';
import RemoveProductModalComponent from './RemoveProductModalComponent.jsx';

export default function ProductsListComponent()
{
    //get products data from global context using custom hook 
    const { products, addProduct,editProduct,removeProduct } = useProductsHook();

    //get toast Context from global context using custom hook
    const {showToast} = useToastHook();

    //create state for selected product
    const [selectedProductState, setSelectedProductState] = React.useState(null);


    //Create Product Modal --------------------------

    const [openNewProductModalState, setOpenNewProductModalState] = React.useState(false);

    function openModalNewProduct(e)
    {
        e.currentTarget.blur(); // remove focus
        setOpenNewProductModalState(true);
    }
    function closeModalNewProduct()
    {
        setOpenNewProductModalState(false);
    }
    function handleNewProduct(newProduct)
    {

        //add new product to current Context state
        addProduct(newProduct); // 🔥 updates context state

        closeModalNewProduct();

        showToast(`${newProduct.name} Product Added Succesfully`,"success",3000,"top","center");
    }

    //Edit Product Modal --------------------------

    const [openEditProductModalState, setOpenEditProductModalState] = React.useState(false);

    function openModalEditProduct(product)
    {
        setSelectedProductState(product);
        setOpenEditProductModalState(true);
    }
    function closeModalEditProduct()
    {
        setOpenEditProductModalState(false);

        setSelectedProductState(null);
    }
    function handleEditProduct(editedProduct)
    {
        //update edited product inside current Context state
        editProduct(editedProduct); // 🔥 updates context state

        closeModalEditProduct();

        showToast(`${editedProduct.name} Product has been Modified`,"success",3000,"top","center");
    }

    //Remove Product Modal --------------------------

    const [openRemoveProductModalState, setOpenRemoveProductModalState] = React.useState(false);

    function openModalRemoveProduct(product)
    {
        setSelectedProductState(product);
        setOpenRemoveProductModalState(true);
    }
    function closeModalRemoveProduct()
    {
        setOpenRemoveProductModalState(false);

        setSelectedProductState(null);
    }
    function handleRemoveProduct(removedProduct)
    {
        //update edited product inside current Context state
        removeProduct(removedProduct); // 🔥 remove item and updates context state

        closeModalRemoveProduct();

        showToast(`${removedProduct.name} Product has been Removed`,"success",3000,"top","center");
    }



    //convert products to Card items [ProductCardComponent]
    let productsJsx=products.map((product) => 
        {
            return(
                    <ProductCardComponent key={product.id} product={product} openEditModalCallback={openModalEditProduct} openRemoveModalCallback={openModalRemoveProduct} />
            )
        });

    return (
        <>
        
        <Box sx={{ flexGrow: 1,height:'87vh' ,position:'relative'}}>
            <Typography variant="h5" component="div">Products List</Typography>
            <br/>
            <Stack direction={{ xs: 'column', sm: 'row' , md:'row' }} spacing={{ xs: 1, sm: 2, md: 4}}>
                { productsJsx }
            </Stack>

            <Fab onClick={openModalNewProduct} color="success" size="medium"  sx={{ position: 'absolute', bottom: 16, right: 16,  }}>
                <AddIcon />
            </Fab>

        </Box>

        <NewProductModalComponent openModalState={openNewProductModalState} 
                                  closeModalCallBack={closeModalNewProduct} 
                                  onValidNewProductCallBack={handleNewProduct}/>

        <EditProductModalComponent openModalState={openEditProductModalState}
                                   closeModalCallBack={closeModalEditProduct} 
                                   productForEdit={selectedProductState}
                                   onValidEditProductCallBack={handleEditProduct} />

        <RemoveProductModalComponent openModalState={openRemoveProductModalState}
                                   closeModalCallBack={closeModalRemoveProduct} 
                                   productForRemove={selectedProductState}
                                   onValidRemoveProductCallBack={handleRemoveProduct} />

        

        </>
    );
}