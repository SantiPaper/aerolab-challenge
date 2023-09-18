import styled from "styled-components";

export const StyledCatalogo = styled.section`
  margin-top: 23rem;
  .title {
    background-image: var(--brand-default);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: var(--size-700);
    text-transform: uppercase;
    margin-bottom: 4rem;
  }
  .span {
    color: var(--neutral-900);
  }

  @media (max-width: 1024px) {
    margin-top: 16rem;
  }
  .title {
    font-size: var(--size-600);
  }
`;
