'use client';

import '@/styles/ProductsListComponent.css'
import * as React from 'react';

import { useProductsHook } from '@/hooks/useProductsHook.js';
import { useToastHook } from '@/hooks/useToastHook.js';

import AddIcon from '@mui/icons-material/Add';

import ProductCardComponent from './ProductCardComponent.jsx'
import NewProductModalComponent from './NewProductModalComponent.jsx';
import EditProductModalComponent from './EditProductModalComponent.jsx';
import RemoveProductModalComponent from './RemoveProductModalComponent.jsx';

export default function ProductsListComponent() {
    const { products, addProduct, editProduct, removeProduct } = useProductsHook();
    const { showToast } = useToastHook();

    const [selectedProductState, setSelectedProductState] = React.useState(null);

    // Create Product Modal
    const [openNewProductModalState, setOpenNewProductModalState] = React.useState(false);

    function openModalNewProduct(e) {
        e.currentTarget.blur();
        setOpenNewProductModalState(true);
    }
    function closeModalNewProduct() {
        setOpenNewProductModalState(false);
    }
    function handleNewProduct(newProduct) {
        addProduct(newProduct);
        closeModalNewProduct();
        showToast(`${newProduct.name} Product Added Succesfully`, "success", 3000, "top", "center");
    }

    // Edit Product Modal
    const [openEditProductModalState, setOpenEditProductModalState] = React.useState(false);

    function openModalEditProduct(product) {
        setSelectedProductState(product);
        setOpenEditProductModalState(true);
    }
    function closeModalEditProduct() {
        setOpenEditProductModalState(false);
        setSelectedProductState(null);
    }
    function handleEditProduct(editedProduct) {
        editProduct(editedProduct);
        closeModalEditProduct();
        showToast(`${editedProduct.name} Product has been Modified`, "success", 3000, "top", "center");
    }

    // Remove Product Modal
    const [openRemoveProductModalState, setOpenRemoveProductModalState] = React.useState(false);

    function openModalRemoveProduct(product) {
        setSelectedProductState(product);
        setOpenRemoveProductModalState(true);
    }
    function closeModalRemoveProduct() {
        setOpenRemoveProductModalState(false);
        setSelectedProductState(null);
    }
    function handleRemoveProduct(removedProduct) {
        removeProduct(removedProduct);
        closeModalRemoveProduct();
        showToast(`${removedProduct.name} Product has been Removed`, "success", 3000, "top", "center");
    }

    const productsJsx = products.map((product) => (
        <ProductCardComponent
            key={product.id}
            product={product}
            openEditModalCallback={openModalEditProduct}
            openRemoveModalCallback={openModalRemoveProduct}
        />
    ));

    return (
        <>
            <div className="relative flex-1" style={{ height: '87vh' }}>

                <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Products List
                </h5>

                <br />

                {/* Products Grid */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                    {productsJsx}
                </div>

                {/* FAB - Add Product */}
                <button
                    onClick={openModalNewProduct}
                    aria-label="add product"
                    className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 active:scale-95 text-white rounded-full shadow-lg transition-all duration-150"
                >
                    <AddIcon fontSize="small" />
                </button>

            </div>

            <NewProductModalComponent
                openModalState={openNewProductModalState}
                closeModalCallBack={closeModalNewProduct}
                onValidNewProductCallBack={handleNewProduct}
            />

            <EditProductModalComponent
                openModalState={openEditProductModalState}
                closeModalCallBack={closeModalEditProduct}
                productForEdit={selectedProductState}
                onValidEditProductCallBack={handleEditProduct}
            />

            <RemoveProductModalComponent
                openModalState={openRemoveProductModalState}
                closeModalCallBack={closeModalRemoveProduct}
                productForRemove={selectedProductState}
                onValidRemoveProductCallBack={handleRemoveProduct}
            />
        </>
    );
}