import { Button } from "../Button";
import { InputRadio } from "../InputRadio";
import { StyledModal } from "./style";
import aeropayNeutral from "/assets/icons/aeropay-2.svg";
import aeropayBrand from "/assets/icons/aeropay-3.svg";

export const Modal = () => {
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
      <div className="modal__points">
        <InputRadio label={"1000"} />
        <InputRadio label={"5000"} />
        <InputRadio label={"7500"} />
      </div>
      <Button className="button">
        <img src={aeropayBrand} alt="" /> Add points
      </Button>
    </StyledModal>
  );
};
