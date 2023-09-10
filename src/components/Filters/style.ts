import styled from "styled-components";

export const StyledFilters = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--size-400);
  font-weight: 600;
  color: var(--neutral-600);
  .container__filters {
    display: flex;
    gap: 1.6rem;

    select {
    }
  }
  .container__sort {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
`;
