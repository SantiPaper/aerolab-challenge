import { Modal } from "../Modal";
import { StyledContainer } from "../Container/style";
import { StyledHeader } from "./style";
import aerolab from "/assets/icons/aerolab-logo-1.svg";
import aeropay from "/assets/icons/aeropay-1.svg";
import chevron from "/assets/icons/chevron-default.svg";
import { useState } from "react";
import { useProductsContext } from "../../hooks/useProductsContext";

export const Header = () => {
  const { points } = useProductsContext();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={aerolab} alt="Aerolab logo" />
        <div className="container-modal">
          <button onClick={toggleModal} className="header__button">
            <img src={aeropay} alt="" />
            <span className="header__points">
              {points.toLocaleString("es-ar")}
            </span>
            <img
              className={
                showModal ? "header__chevron-rotate" : "header__chevron"
              }
              src={chevron}
              alt=""
            />
          </button>
          {showModal && <Modal />}
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
