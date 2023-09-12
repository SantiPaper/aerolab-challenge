import { Container } from "../Container";
import { StyledFilters } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { InputRadio } from "../InputRadio";
import { Pagination } from "../Pagination";

export const Filters = () => {
  const { products } = useProductsContext();
  const set = new Set(products.map((product) => product.category));
  const categories = Array.from(set).sort((a, b) => a.localeCompare(b));

  return (
    <Container>
      <StyledFilters>
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
          <InputRadio label="Most Recent" />
          <InputRadio label="Lowest Price" />
          <InputRadio label="Highest Price" />
        </div>

        <Pagination className="pagination" />
      </StyledFilters>
    </Container>
  );
};
