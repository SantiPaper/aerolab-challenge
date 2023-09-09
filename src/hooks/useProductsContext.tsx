import { useContext } from "react";
import { ProductsContext } from "../context";

export const useProductsContext = () => {
  const value = useContext(ProductsContext);

  if (value === null) {
    throw new Error(
      "No se puede utilizar useProductsContext fuera del provider"
    );
  }
  return value;
};
