"use client";
import React from "react";

const ParallaxHeroStyle1 = ({
  children,
  className,
  id,
  bgImage = "",
}) => {
  return (
    <div
      id={id}
      data-parallax="true"
      className={className}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {children}
    </div>
  );
};

export default ParallaxHeroStyle1;
