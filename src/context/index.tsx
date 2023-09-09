import { createContext, useState, PropsWithChildren } from "react";
import type { ContextValue, Product } from "./types";

export const ProductsContext = createContext<ContextValue | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
