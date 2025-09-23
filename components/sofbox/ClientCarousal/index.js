"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientCarousal = (props) => {
  const images = props.images;

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 508,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item.src}>
          <div className="item" style={{ margin: "0 10px" }}>
            <img
              className="img-fluid center-block"
              src={item.src}
              alt="#"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClientCarousal;
