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
    border: 1px solid var(--neutral-300);
    padding: 1.2rem 1.6rem;
    border-radius: 1.6rem;
    background-color: var(--neutral-0);
    display: flex;
    align-items: center;
    gap: 2.4rem;

    button:first-child {
      transform: rotate(180deg);
    }

    button {
      background-color: var(--brand-light-100);
      border: none;
      padding: 0.8rem;
      border-radius: 0.8rem;
      display: flex;
      cursor: pointer;
      transition: filter 0.5s;
      &:hover {
        filter: brightness(0.9);
      }
      &:active {
        filter: brightness(1);
        transition: none;
      }
    }

    &__span {
      background-image: var(--brand-default);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;
