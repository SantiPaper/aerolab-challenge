import styled from "styled-components";

export const StyledPagination = styled.div`
  border: 1px solid var(--neutral-300);
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  background-color: var(--neutral-0);
  display: flex;
  align-items: center;
  gap: 2.4rem;
  font-size: var(--size-400);
  color: var(--neutral-600);
  font-weight: 600;
  button:first-child {
    transform: rotate(180deg);
  }

  button {
    background-color: var(--brand-light-100);
    border: none;
    padding: 0.4rem;
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
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .pagination__span {
    background-image: var(--brand-default);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
