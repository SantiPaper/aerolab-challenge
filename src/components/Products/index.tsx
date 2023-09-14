import { StyledProducts } from "./stlye";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Container } from "../Container";
import { Product } from "../Product";

export const Products = () => {
  const { products, sort } = useProductsContext();
  const sortedProducts = [...products];

  if (sort !== "most-recent") {
    sortedProducts.sort((a, b) => {
      return sort === "highest-price" ? b.cost - a.cost : a.cost - b.cost;
    });
  }

  return (
    <Container>
      <StyledProducts>
        {sortedProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </StyledProducts>
    </Container>
  );
};
