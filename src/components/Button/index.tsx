import { PropsWithChildren } from "react";
import { StyledButton } from "./style";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Button = ({ children, className }: Props) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};
