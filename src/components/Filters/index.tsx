import { Container } from "../Container";
import { StyledFilters } from "./style";

export const Filters = () => {
  return (
    <Container>
      <StyledFilters>
        <div>
          <label htmlFor="select">Filter by:</label>
          <select id="select"></select>
        </div>
        <div>
          <label htmlFor="radio">Sort by:</label>
        </div>
      </StyledFilters>
    </Container>
  );
};
