import styled from "styled-components";

export const StyledInfo = styled.section`
  background-image: var(--specials-section);
  max-height: 53rem;

  & > div {
    display: flex;
    justify-content: center;
    padding: 0;
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
    }

    &__img {
      width: min(30vw, 50rem);
      height: min(30vw, 50rem);
    }

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
      width: min(30vw, 50rem);
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
      -webkit-background-clip: text;
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
  @media (max-width: 1024px) {
    background-image: var(--specials-section);
    min-height: 65rem;
    display: flex;
    margin-top: -20rem;

    & > div {
      gap: 0.8rem;
      min-height: 55rem;
      align-items: flex-end;
      justify-content: center;
    }

    .card {
      margin-top: 0;
      z-index: 4;

      &__img {
        width: min(30vw, 29.9rem);
        height: min(30vw, 27.5rem);
      }

      &__info {
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
        font-size: var(--size-500);
      }

      &__description {
        font-size: var(--size-300);
        max-width: 23ch;
      }

      &:first-child {
        transform: none;
        margin-right: 0;
        margin-top: 0;
      }

      &:last-child {
        transform: none;
        margin-left: 0;
        margin-top: 0;
        min-height: 48rem;
      }
      &__img:last-of-type {
        height: 29.9rem;
      }
    }
  }
  @media (max-width: 800px) {
    max-height: none;
    padding-top: 35rem;
    padding-bottom: 3.2rem;
    & > div {
      gap: 2.4rem;
      height: fit-content;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
    .card {
      margin-top: 0;
      z-index: 4;

      &__img {
        width: 29.9rem;
        height: 27.5rem;
      }
      &__info {
        width: fit-content;
      }
    }
  }
`;
