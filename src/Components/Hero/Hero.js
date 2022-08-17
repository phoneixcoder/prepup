import React from "react";
import HeroImg from '../../Resources/Hero/heroImg.gif'
import './Hero.css'
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text-container">
          <div className="hero-text--heading">
            <h1 className="hero-text--heading--content">
              Your <br />
              <span className="hero-text-highlighted">
                ONE STOP DESTINATION
                <br />
              </span>
              For RTU Notes
            </h1>
          </div>
          <div className="hero-text--para">
            <p className="hero-text--para--content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="hero-img-container">
            <img src={HeroImg} alt="" className="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
