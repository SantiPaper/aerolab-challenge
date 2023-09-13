import { PropsWithChildren } from "react";
import { StyledButton } from "./style";
import { ButtonHTMLAttributes } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
