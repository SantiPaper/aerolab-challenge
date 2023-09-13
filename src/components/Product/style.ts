import styled from "styled-components";

export const StyledProduct = styled.article`
  width: 32rem;
  .container {
    &__img {
      border: 1px solid var(--neutral-300);
      padding: 6.4rem 3.4rem;
      border-radius: 1.6rem 1.6rem 0 0;
      height: 34.8rem;
    }
    &__info {
      border: 1px solid var(--neutral-300);
      border-top: none;
      padding: 1.6rem 2.4rem;
      border-radius: 0 0 1.6rem 1.6rem;
    }
  }

  h3 {
    font-size: var(--size-400);
    color: var(--neutral-900);
    font-weight: 600;
  }
  p {
    font-size: var(--size-200);
    color: var(--neutral-600);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.4rem;
  }
  .button {
    margin-top: 1.6rem;
  }

  .button-pending {
    opacity: 0.7;
  }
`;
