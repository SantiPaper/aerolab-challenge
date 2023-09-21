import { useState } from "react";
import type { Product as ProductType } from "../../context/types";
import { useProductsContext } from "../../hooks/useProductsContext";
import { Button } from "../Button";
import { StyledProduct } from "./style";
import logo from "/assets/icons/aeropay-3.svg";
import logoNeed from "/assets/icons/aeropay-4.svg";
import type { Notification } from "../ContainerNotification";

type Props = {
  product: ProductType;
  addNotification: (notification: Omit<Notification, "id">) => void;
};

export const Product = ({ product, addNotification }: Props) => {
  const [isPending, setIsPending] = useState(false);

  const { removePoints, points } = useProductsContext();

  const needMorePoints = points < product.cost;

  const handleClick = () => {
    if (isPending) return;

    setIsPending(true);
    removePoints(product.cost);

    setTimeout(() => {
      setIsPending(false);
      addNotification({
        name: product.name,
        status: "success",
      });
    }, 2000);
  };

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
        onClick={handleClick}
        disabled={needMorePoints}
        className={isPending ? "button-pending button" : "button"}
      >
        {isPending && "Processing..."}
        {!isPending && needMorePoints && (
          <>
            You need <img src={logoNeed} alt="" />{" "}
            {(product.cost - points).toLocaleString("es-ar")}
          </>
        )}
        {!isPending && !needMorePoints && (
          <>
            Redeem for <img src={logo} alt="" />{" "}
            {product.cost.toLocaleString("es-ar")}
          </>
        )}
      </Button>
    </StyledProduct>
  );
};
