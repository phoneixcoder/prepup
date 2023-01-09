import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Heading";
import OfferCard from "../OfferCard";

const OfferCarousel = () => {
  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "130px",
  };
  return (
    <div className="w-full overflow-hidden">
      <Heading mainHeading="What We" subHeading="offer" />

      <div className="p-[40px] flex w-[100%]">
        <Slider {...sliderSettings} className="h-[350px] w-[100%] px-[50px]">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </Slider>
      </div>
    </div>
  );
};

export default OfferCarousel;
