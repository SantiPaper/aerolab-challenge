import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
  transform: translateY(-1.5rem);
}
100%{
  transform: translateY(0);
  opacity: 1;
}
`;

const fadeInSemi = keyframes`
0%{
  opacity: 0.5;
}
100%{
  opacity: 1;
}


`;

export const StyledModal = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  border: 1px solid var(--neutral-300);
  padding: 1.6rem 2.4rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 500ms forwards;
  background-color: var(--neutral-0);
  z-index: 3;

  .modal {
    &__add-balance {
      padding: 0 2.4rem 1.6rem;
      font-size: var(--size-400);
      font-weight: 600;
      color: var(--neutral-900);
      border-bottom: 1px solid var(--neutral-300);
      margin: 0 -2.4rem;
    }
    &__card {
      margin-top: 1.6rem;
      display: flex;
      flex-direction: column;
      background-color: var(--neutral-900);
      color: var(--neutral-0);
      padding: 1.6rem;
      width: 26.4rem;
      height: 14.8rem;
      border-radius: 0.8rem;
      background-image: url("/assets/path-1.svg");
    }
    &__top,
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__top {
      font-size: var(--size-400);
    }
    &__bottom {
      margin-top: auto;
      font-size: var(--size-200);
    }
    &__points {
      display: flex;
      gap: 0.4rem;
      margin-top: 4rem;

      input {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
      }
      input:checked + label {
        background: var(--brand-default);
        animation: ${fadeInSemi} 500ms forwards;

        span {
          color: var(--neutral-100);
        }
      }

      label {
        cursor: pointer;
        font-size: var(--size-400);
        font-weight: 600;
        padding: 1rem 2rem;
        background-color: var(--neutral-300);
        border-radius: 1.2rem;
        display: inline-block;

        span {
          background: var(--brand-default);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      }
    }
    &__input {
      position: relative;
    }
    &__add-points {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      margin-top: 2.4rem;
      background: var(--brand-default);
      border: none;
      border-radius: 1.6rem;
      padding: 1.2rem 1.6rem;
      color: var(--neutral-0);
      font-size: var(--size-400);
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: 0.25s ease-in-out;

      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        transition: none;
        filter: brightness(0.95);
        transform: scale(0.98) translateY(0.15rem);
      }
    }
  }
`;
