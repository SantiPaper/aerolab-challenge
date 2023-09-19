import { StyledFilters } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { InputRadio } from "../InputRadio";
import { Pagination } from "../Pagination";
import type { Product, Sort } from "../../context/types";
import { ChangeEvent } from "react";

type Props = {
  setFilter: (value: string) => void;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  currentPage: number;
  itemsPerPage: number;
  sortedProducts: Array<Product>;
  sort: Sort;
};

export const Filters = ({
  sort,
  setSort,
  setFilter,
  goToNextPage,
  goToPrevPage,
  currentPage,
  itemsPerPage,
  sortedProducts,
}: Props) => {
  const { products } = useProductsContext();
  const set = new Set(products?.map((product) => product.category));
  const categories = Array.from(set).sort((a, b) => a.localeCompare(b));

  const sortProducts = (ev: ChangeEvent<HTMLInputElement>) =>
    setSort(ev.target.value as Sort);

  return (
    <StyledFilters>
      <div className="flex-tablet">
        <div className="container__filters">
          <label htmlFor="select">Filter by:</label>
          <select onChange={(ev) => setFilter(ev.target.value)} id="select">
            <option value="">All Products</option>
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>

        <div className="container__sort">
          <p>Sort by:</p>
          <InputRadio
            onChange={sortProducts}
            name="sort"
            label="Most Recent"
            value="most-recent"
            checked={sort === "most-recent"}
          />
          <InputRadio
            onChange={sortProducts}
            name="sort"
            value="lowest-price"
            label="Lowest Price"
            checked={sort === "lowest-price"}
          />
          <InputRadio
            onChange={sortProducts}
            name="sort"
            value="highest-price"
            label="Highest Price"
            checked={sort === "highest-price"}
          />
        </div>
      </div>

      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        sortedProducts={sortedProducts}
        className="pagination"
      />
    </StyledFilters>
  );
};
