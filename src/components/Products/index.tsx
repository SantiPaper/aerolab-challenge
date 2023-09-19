import { StyledProducts } from "./stlye";
import { Product } from "../Product";
import type { Product as ProductType } from "../../context/types";

type Props = {
  products: Array<ProductType>;
};

export const Products = ({ products }: Props) => {
  return (
    <StyledProducts>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </StyledProducts>
  );
};
