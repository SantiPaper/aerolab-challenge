import { Container } from "../Container";
import { StyledFooter } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Pagination } from "../Pagination";

export const FooterProducts = () => {
  const { products } = useProductsContext();
  return (
    <Container>
      <StyledFooter>
        <p>
          16 of {products.length} <span>products</span>
        </p>
        <Pagination className="pagination" />
      </StyledFooter>
    </Container>
  );
};
