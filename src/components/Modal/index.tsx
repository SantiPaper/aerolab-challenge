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
        <div className="modal__input">
          <input type="radio" id="1000" value="1000" name="points" />
          <label htmlFor="1000">
            <span>1000</span>
          </label>
        </div>
        <div className="modal__input">
          <input type="radio" id="5000" value="5000" name="points" />
          <label htmlFor="5000">
            <span>5000</span>
          </label>
        </div>
        <div className="modal__input">
          <input type="radio" id="7500" value="7500" name="points" />
          <label htmlFor="7500">
            <span>7500</span>
          </label>
        </div>
      </div>
      <button className="modal__add-points">
        <img src={aeropayBrand} alt="" /> Add points
      </button>
    </StyledModal>
  );
};
