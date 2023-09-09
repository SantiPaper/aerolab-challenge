import { Container } from "../Container";
import { StyledInfo } from "./style";
import img1 from "/assets/illustrations/walkthroug-1-desktop.png";
import icon1 from "/assets/icons/walkthrough-1.svg";
import img2 from "/assets/illustrations/walkthroug-2-desktop.png";
import icon2 from "/assets/icons/walkthrough-2.svg";
import img3 from "/assets/illustrations/walkthroug-3-desktop.png";
import icon3 from "/assets/icons/walkthrough-3.svg";

export const Info = () => {
  return (
    <StyledInfo>
      <Container>
        <article className="card">
          <div className="card__background-img">
            <img src={img1} alt="" width={500} height={500} />
          </div>
          <div className="card__info">
            <div>
              <img src={icon1} alt="" />
              <h3 className="card__title">1—browse</h3>
            </div>
            <p className="card__description">
              Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </article>
        <article className="card">
          <div className="card__background-img">
            <img src={img2} alt="" width={500} height={500} />
          </div>
          <div className="card__info">
            <div>
              <img src={icon3} alt="" />
              <h3 className="card__title">2—choose</h3>
            </div>
            <p className="card__description">
              Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </article>
        <article className="card">
          <div className="card__background-img">
            <img src={img3} alt="" width={500} height={500} />
          </div>
          <div className="card__info">
            <div>
              <img src={icon2} alt="" />
              <h3 className="card__title">3—enjoy!</h3>
            </div>
            <p className="card__description">
              Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </article>
      </Container>
    </StyledInfo>
  );
};
