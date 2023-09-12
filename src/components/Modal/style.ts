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
    }
  }
  .button {
    margin-top: 2.4rem;
  }
`;
