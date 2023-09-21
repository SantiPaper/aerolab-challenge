import styled from "styled-components";

export const StyledContainerNotifications = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: min(53rem, 100vw);
  height: fit-content;
  margin: 4rem 0 4rem 8rem;

  z-index: 10;
`;
