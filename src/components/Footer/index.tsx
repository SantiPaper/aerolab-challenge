import { StyledFooter } from "./style";
import github from "/assets/icons/github-default.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/SantiPaper/aerolab-challenge">
        <img src={github} width={32} height={32} alt="" aria-hidden /> View this
        repository
      </a>
    </StyledFooter>
  );
};
