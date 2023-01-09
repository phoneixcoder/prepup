import React from "react";
import HeroImg from '../../Resources/Hero/heroImg.gif'
import Button from "../Button/Button";
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
            We are the one and only secure and final destination for RTU notes. There are notes for every subject in every semester. You can easily download it. You can also upload notes while downloading to assist other students. Win-Win for all of us.{" "}
            </p>
            <Button text = "Get Notes" link = "/get-notes" btnclass = "mt-3 text-lg justify-center !font-bold"/>
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
