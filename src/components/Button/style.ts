import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
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
`;
