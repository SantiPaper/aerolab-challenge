import styled from "styled-components";

export const StyledInfo = styled.section`
  background-image: var(--specials-section);
  max-height: 53rem;

  & > div {
    display: flex;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--neutral-0);
    padding: 1.2rem;
    border-radius: 3.2rem;
    border: 1px solid var(--neutral-300);
    z-index: 2;
    height: fit-content;
    margin-top: -12.5rem;

    &__background-img {
      background-image: var(--specials-section);
      border: 1px solid var(--neutral-300);
      border-radius: 2rem 2rem 0 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      background-color: var(--neutral-0);
      width: 100%;
      padding: 16px 24px 24px 24px;
      border: 1px solid var(--neutral-300);
      border-bottom-right-radius: 3.2rem;
      border-bottom-left-radius: 3.2rem;

      & > div {
        display: flex;
        gap: 1.3rem;

        img {
          background-color: var(--brand-light-100);
          padding: 0.4rem;
          border-radius: 0.8rem;
        }
      }
    }

    &__title {
      background-image: var(--brand-default);
      background-clip: text;
      color: transparent;
      font-size: var(--size-600);
      text-transform: uppercase;
    }

    &__description {
      font-size: var(--size-400);
      color: var(--neutral-600);
      max-width: 30ch;
    }

    &:first-child {
      transform: rotate(-3deg);
      margin-right: -8rem;
      margin-top: -10rem;
    }

    &:last-child {
      transform: rotate(3deg);
      margin-left: -8rem;
      margin-top: -10rem;
    }
  }
`;
