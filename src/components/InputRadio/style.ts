import styled, { keyframes } from "styled-components";

const fadeInSemi = keyframes`
0%{
  opacity: 0.5;
}
100%{
  opacity: 1;
}


`;

export const StyledRadio = styled.div`
  position: relative;
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
`;
