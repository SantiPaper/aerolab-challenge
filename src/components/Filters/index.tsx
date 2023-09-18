import { Container } from "../Container";
import { StyledFilters } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { InputRadio } from "../InputRadio";
import { Pagination } from "../Pagination";
import { Sort } from "../../context/types";
import { ChangeEvent } from "react";

export const Filters = () => {
  const { products, setSort } = useProductsContext();
  const set = new Set(products?.map((product) => product.category));
  const categories = Array.from(set).sort((a, b) => a.localeCompare(b));

  const sortProducts = (ev: ChangeEvent<HTMLInputElement>) =>
    setSort(ev.target.value as Sort);

  return (
    <StyledFilters>
      <div className="flex-tablet">
        <div className="container__filters">
          <label htmlFor="select">Filter by:</label>
          <select id="select">
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
          />
          <InputRadio
            onChange={sortProducts}
            name="sort"
            value="lowest-price"
            label="Lowest Price"
          />
          <InputRadio
            onChange={sortProducts}
            name="sort"
            value="highest-price"
            label="Highest Price"
          />
        </div>
      </div>

      <Pagination className="pagination" />
    </StyledFilters>
  );
};
