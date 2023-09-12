import { StyledPagination } from "./style";
import chevron from "/assets/icons/chevron-active.svg";

type Props = {
  className?: string;
};

export const Pagination = ({ className }: Props) => {
  return (
    <StyledPagination className={className}>
      <button>
        <img src={chevron} alt="" />
      </button>
      <span>
        Page <span className="pagination__span">1 of 2</span>
      </span>
      <button>
        <img src={chevron} alt="" />
      </button>
    </StyledPagination>
  );
};
