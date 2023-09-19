import type { Product } from "../../context/types";
import { StyledPagination } from "./style";
import chevron from "/assets/icons/chevron-active.svg";

type Props = {
  className?: string;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  currentPage: number;
  itemsPerPage: number;
  sortedProducts: Array<Product>;
};

export const Pagination = ({
  className,
  goToNextPage,
  goToPrevPage,
  currentPage,
  itemsPerPage,
  sortedProducts,
}: Props) => {
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <StyledPagination className={className}>
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <img src={chevron} alt="" />
      </button>
      <span>
        Page{" "}
        <span className="pagination__span">
          {currentPage} of {totalPages}
        </span>
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <img src={chevron} alt="" />
      </button>
    </StyledPagination>
  );
};
