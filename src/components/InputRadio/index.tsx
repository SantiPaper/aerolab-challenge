import { StyledRadio } from "./style";
import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputRadio = ({ label, className, ...rest }: Props) => {
  return (
    <StyledRadio className={className}>
      <input type="radio" id={label} {...rest} />
      <label htmlFor={label}>
        <span>{label}</span>
      </label>
    </StyledRadio>
  );
};
