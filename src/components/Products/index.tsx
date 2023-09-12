import { StyledProducts } from "./stlye";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Container } from "../Container";
import { Product } from "../Product";

export const Products = () => {
  const { products } = useProductsContext();

  return (
    <Container>
      <StyledProducts>
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </StyledProducts>
    </Container>
  );
};
