import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url("/assets/illustrations/single-wave-pattern.svg");
  margin: 10rem 10rem 0;
  padding-bottom: 23rem;

  & > div {
    display: flex;
  }
  .hero-columns {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero {
    &__span {
      color: var(--neutral-600);
      font-size: var(--size-400);
      font-weight: 600;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
    }
    &__title {
      background-image: var(--brand-default);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: var(--size-900);
      text-transform: uppercase;
      line-height: 0.8;
      margin-top: 0.8rem;
      margin-bottom: 2.4rem;
    }
    &__title-span {
      color: var(--neutral-900);
    }

    &__description {
      font-size: var(--size-400);
      color: var(--neutral-600);
      font-weight: 600;
      line-height: 1.5;
      max-width: 50ch;
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      padding: 2.4rem 4rem;
      background-image: var(--brand-default);
      color: var(--neutral-0);
      text-transform: uppercase;
      text-decoration: none;
      font-size: var(--size-400);
      font-weight: 600;
      border-radius: 2.4rem;
      margin-top: 6.4rem;
      transition: transform 0.25s;

      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        transition: none;
        filter: brightness(0.95);
        transform: scale(0.98) translateY(0.15rem);
      }
    }

    &__image {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      pointer-events: none;
    }
  }
  .hero-columns:last-child {
    background-image: var(--specials-section);
    border-radius: 10rem;
    height: 60rem;
    position: relative;
  }
`;
