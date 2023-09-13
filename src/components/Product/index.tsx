import type { Product as ProductType } from "../../context/types";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Button } from "../Button";
import { StyledProduct } from "./style";
import logo from "/assets/icons/aeropay-3.svg";
import logoNeed from "/assets/icons/aeropay-4.svg";

type Props = {
  product: ProductType;
};

export const Product = ({ product }: Props) => {
  const { removePoints, points } = useProductsContext();
  const needMorePoints = points < product.cost;
  return (
    <StyledProduct key={product._id}>
      <div className="container__img">
        <img src={product.img.url} alt={product.name} />
      </div>
      <div className="container__info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </div>
      <Button
        onClick={() => removePoints(product.cost)}
        disabled={needMorePoints}
        className="button"
      >
        {needMorePoints && (
          <>
            You need <img src={logoNeed} alt="" />{" "}
            {(product.cost - points).toLocaleString("es-ar")}
          </>
        )}
        {!needMorePoints && (
          <>
            Redeem for <img src={logo} alt="" />{" "}
            {product.cost.toLocaleString("es-ar")}
          </>
        )}
      </Button>
    </StyledProduct>
  );
};
