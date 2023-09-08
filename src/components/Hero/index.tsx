import { Container } from "../Container";
import { StyledHero } from "./style";
import heroImg from "/assets/illustrations/hero-desktop.png";
import arrow from "/assets/icons/arrow.svg";

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="hero-columns">
          <span className="hero__span">Explore the</span>
          <h1 className="hero__title">
            Tech <span className="hero__title-span">zone</span>
          </h1>
          <p className="hero__description">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <a className="hero__link" href="#">
            View all products <img src={arrow} alt="" aria-hidden />
          </a>
        </div>
        <div className="hero-columns">
          <img
            className="hero__image"
            src={heroImg}
            alt=""
            width={900}
            height={800}
          />
        </div>
      </Container>
    </StyledHero>
  );
};
