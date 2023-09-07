import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--neutral-0);
  margin-top: 4rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }
  .container-modal {
    position: relative;
  }

  .header {
    &__button {
      display: flex;
      align-items: center;
      padding: 0.8rem 1.6rem;
      gap: 1rem;
      background-color: var(--neutral-0);
      border: 1px solid var(--neutral-300);
      border-radius: 1.6rem;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.08);
    }
    &__points {
      background: var(--brand-default);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: var(--size-400);
      font-weight: 600;
    }
    &__chevron {
      transform: rotate(90deg);
    }
    &__chevron-rotate {
      transform: rotate(-90deg);
    }
  }
`;
