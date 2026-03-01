export default function ProductsReducer(products, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...products, action.payload];
    case "EDIT_PRODUCT":
      return products.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );
    case "REMOVE_PRODUCT":
      return products.filter((product) => product.id !== action.payload.id);
    default:
      return products;
  }
}
