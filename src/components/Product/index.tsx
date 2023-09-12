import type { Product as ProductType } from "../../context/types";
import { Button } from "../Button";
import { StyledProduct } from "./style";
import logo from "/assets/icons/aeropay-3.svg";

type Props = {
  product: ProductType;
};

export const Product = ({ product }: Props) => {
  return (
    <StyledProduct key={product._id}>
      <div className="container__img">
        <img src={product.img.url} alt={product.name} />
      </div>
      <div className="container__info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </div>
      <Button className="button">
        Redeem for <img src={logo} alt="" /> 12.500
      </Button>
    </StyledProduct>
  );
};
