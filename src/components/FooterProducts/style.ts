import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.4rem;
  position: relative;

  p {
    font-size: var(--size-400);
    background-image: var(--brand-default);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  span {
    color: var(--neutral-600);
  }

  .pagination {
    position: absolute;
    right: 0;
  }
`;
