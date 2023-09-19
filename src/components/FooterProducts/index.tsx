import { Container } from "../Container";
import { StyledFooter } from "./style";
import { Pagination } from "../Pagination";
import type { Product } from "../../context/types";

type Props = {
  goToNextPage: () => void;
  goToPrevPage: () => void;
  currentPage: number;
  itemsPerPage: number;
  sortedProducts: Array<Product>;
  slicedProducts: Array<Product>;
};

export const FooterProducts = ({
  goToNextPage,
  goToPrevPage,
  currentPage,
  itemsPerPage,
  sortedProducts,
  slicedProducts,
}: Props) => {
  return (
    <Container>
      <StyledFooter>
        <p>
          {slicedProducts.length} of {sortedProducts.length}{" "}
          <span>products</span>
        </p>
        <Pagination
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortedProducts={sortedProducts}
          className="pagination"
        />
      </StyledFooter>
    </Container>
  );
};
