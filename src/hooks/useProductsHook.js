'use client';

//Import React Library
import * as React from 'react';

//Import Contexts (Shared Data)
import { ProductsContext } from '@/contexts/ProductsContext.js';

export function useProductsHook()
{
     //const { products, addProduct,editProduct,removeProduct } = React.useContext(ProductsContext);

     return React.useContext(ProductsContext);

}