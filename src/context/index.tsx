import { createContext, useState, PropsWithChildren } from "react";
import type { ContextValue, Product } from "./types";

export const ProductsContext = createContext<ContextValue | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [points, setPoints] = useState(0);

  const addPoints = (newPoints: number) => {
    setPoints(points + newPoints);
  };

  const removePoints = (newPoints: number) => {
    if (points >= newPoints) {
      setPoints(points - newPoints);
    }
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        points,
        addPoints,
        removePoints,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
