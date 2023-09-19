import styled from "styled-components";

export const StyledFilters = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--size-400);
  font-weight: 600;
  color: var(--neutral-600);
  .container__filters {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    border-right: 2px solid var(--neutral-300);
    padding-right: 4rem;
    margin-right: 4rem;

    select {
      padding: 1.6rem 2.4rem;
      color: var(--neutral-600);
      border-radius: 1.6rem;
      background-color: var(--neutral-0);
      border: 1px solid var(--neutral-300);
    }
    option {
      font-weight: 400;
    }
  }
  .container__sort {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
  .pagination {
    margin-left: auto;
  }
  .flex-tablet {
    display: flex;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
    .container__filters {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
      label {
        display: none;
      }
    }
    .flex-tablet {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .pagination {
    margin-left: 0;
    margin-top: 2rem;
  }
`;
