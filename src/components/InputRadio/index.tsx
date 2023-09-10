import { StyledRadio } from "./style";

type Props = {
  label: string;
  className?: string;
};

export const InputRadio = ({ label, className }: Props) => {
  return (
    <StyledRadio className={className}>
      <input type="radio" id={label} value={label} name="points" />
      <label htmlFor={label}>
        <span>{label}</span>
      </label>
    </StyledRadio>
  );
};
