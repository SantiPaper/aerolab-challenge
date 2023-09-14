import { Button } from "../Button";
import { InputRadio } from "../InputRadio";
import { StyledModal } from "./style";
import aeropayNeutral from "/assets/icons/aeropay-2.svg";
import aeropayBrand from "/assets/icons/aeropay-3.svg";
import { useProductsContext } from "../../hooks/useProductsContext";
import { FormEvent } from "react";

export const Modal = () => {
  const { addPoints } = useProductsContext();

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const selectedPoints = formData.get("points");
    if (selectedPoints !== null) {
      addPoints(Number(selectedPoints));
    }
  };
  return (
    <StyledModal>
      <h3 className="modal__add-balance">Add balance</h3>
      <div className="modal__card">
        <div className="modal__top">
          <p>Aerolab</p>
          <img src={aeropayNeutral} alt="" />
        </div>
        <div className="modal__bottom">
          <p>John Kite</p>
          <p>07/23</p>
        </div>
      </div>
      <form onSubmit={onSubmit} id="points-form" className="modal__points">
        <InputRadio name="points" value="1000" label={"1000"} />
        <InputRadio name="points" value="5000" label={"5000"} />
        <InputRadio name="points" value="7500" label={"7500"} />
      </form>
      <Button form="points-form" className="button">
        <img src={aeropayBrand} alt="" /> Add points
      </Button>
    </StyledModal>
  );
};
