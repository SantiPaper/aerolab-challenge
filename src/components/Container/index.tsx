import { PropsWithChildren } from "react";
import { StyledContainer } from "./style";

export const Container = ({ children }: PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};
