import { useState } from "react";
import { Container } from "../Container";
import { Filters } from "../Filters";
import { FooterProducts } from "../FooterProducts";
import { Products } from "../Products";
import { StyledCatalogo } from "./style";
import { Sort } from "../../context/types";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useItemsPerPage } from "../../hooks/useItemsPerPage";

export const Catalogo = () => {
  const [sort, setSort] = useState<Sort>("most-recent");
  const [filtered, setFiltered] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { products } = useProductsContext();
  const { itemsPerPage } = useItemsPerPage();

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setFilter = (value: string) => {
    setFiltered(value);
    setCurrentPage(1);
  };

  const sortedProducts = [...products].filter((prod) =>
    prod.category.includes(filtered)
  );
  if (sort !== "most-recent") {
    sortedProducts.sort((a, b) => {
      return sort === "highest-price" ? b.cost - a.cost : a.cost - b.cost;
    });
  }

  const initialIndex = currentPage * itemsPerPage - itemsPerPage;

  const lastIndex = currentPage * itemsPerPage;

  const slicedProducts = sortedProducts.slice(initialIndex, lastIndex);

  return (
    <Container>
      <StyledCatalogo id="catalog">
        <h2 className="title">
          Tech <span className="span">products</span>
        </h2>
        <Filters
          sort={sort}
          setFilter={setFilter}
          setSort={setSort}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortedProducts={sortedProducts}
        />
        <Products products={slicedProducts} />
        <FooterProducts
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          sortedProducts={sortedProducts}
          slicedProducts={slicedProducts}
        />
      </StyledCatalogo>
    </Container>
  );
};
