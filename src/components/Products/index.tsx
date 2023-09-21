import { StyledProducts } from "./stlye";
import { Product } from "../Product";
import type { Product as ProductType } from "../../context/types";
import { useState } from "react";
import type { Notification } from "../ContainerNotification";
import { ContainerNotification } from "../ContainerNotification";
import { v4 } from "uuid";

type Props = {
  products: Array<ProductType>;
};

export const Products = ({ products }: Props) => {
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    setNotifications((prev) => [
      ...prev,
      {
        ...notification,
        id: v4(),
      },
    ]);
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((noti) => noti.id !== id));
  };
  return (
    <>
      <StyledProducts>
        {products.map((product) => (
          <Product
            addNotification={addNotification}
            key={product._id}
            product={product}
          />
        ))}
      </StyledProducts>
      {notifications.length > 0 && (
        <ContainerNotification
          onClose={deleteNotification}
          notifications={notifications}
        />
      )}
    </>
  );
};
