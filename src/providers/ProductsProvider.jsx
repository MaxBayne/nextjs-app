"use client";

import * as React from 'react';

import { ProductsContext } from "@/contexts/ProductsContext.js";
import ProductsReducer from "@/reducers/ProductsReducer.js";
import { v4 as uuidv4 } from 'uuid';

const productsKeyInsideLocalStorage="productsList";

const initialProducts = [
  {
    id: uuidv4(),
    name: "Product 1",
    price: 100,
    description: "This is product 1",
  },
  {
    id: uuidv4(),
    name: "Product 2",
    price: 150,
    description: "This is product 2",
  },
  {
    id: uuidv4(),
    name: "Product 3",
    price: 120.5,
    description: "This is product 3",
  },
];

//2- Create Context Provider like Component to wrap consumed Components
export default function ProductsProvider({ children }) 
{
  
  const [products, dispatch] = React.useReducer(ProductsReducer, initialProducts, () => 
  {
     const stored = localStorage.getItem(productsKeyInsideLocalStorage);
     return stored ? JSON.parse(stored) : initialProducts;
  });

  //save products to localStorage whenever products array changed
  React.useEffect(() => 
  {
    localStorage.setItem(productsKeyInsideLocalStorage,JSON.stringify(products));
  }, [products]);

  function addProduct(newProduct) 
  {
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  }

  function editProduct(modifiedProduct) 
  {
    dispatch({ type: "EDIT_PRODUCT", payload: modifiedProduct });
  }

  function removeProduct(removedProduct)
  {
    dispatch({ type: "REMOVE_PRODUCT", payload: removedProduct });
  }


  return (
    <ProductsContext.Provider value={{products, addProduct ,editProduct,removeProduct}}>
      {children}
    </ProductsContext.Provider>
  );
}
