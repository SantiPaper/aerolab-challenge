import { Container } from "../Container";
import { Filters } from "../Filters";
import { StyledCatalogo } from "./style";

export const Catalogo = () => {
  return (
    <Container>
      <StyledCatalogo>
        <h2 className="title">
          Tech <span className="span">products</span>
        </h2>
        <Filters />
      </StyledCatalogo>
    </Container>
  );
};
