"use client";
import React, { useState, useEffect } from "react";

import {
  services,
  products,
  courses,
  training,
  development,
} from "../constants/menu";
import HeaderStyle1 from "@/components/sofbox/HeaderStyle1";
// import { index } from "@/config/plugins";

const WebHeader = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate header width based on scroll position

  const menu = [
    {
      href: "/",
      title: "Home",
    },
    { href: "/about-us", title: "About" },
    {
      href: "",
      title: "Service",
      _is_active: true,
      active: true,
      children: true,
      child: services,
    },
    {
      href: "",
      title: "Training",
      _is_active: true,
      active: true,
      children: true,
      child: training,
    },
    {
      href: "",
      title: "Courses",
      _is_active: true,
      active: true,
      children: true,
      child: courses,
    },
    {
      href: "",
      title: "Development",
      _is_active: true,
      active: true,
      children: true,
      child: development,
    },
    { href: "/corporate-training", title: "Corporate Training" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <>
      <HeaderStyle1
        styledLogo={false}
        navItems={menu}
        logoImg={"/assets/images/keen-logo2.png"}
        scrollPosition={scrollPosition}
      >
        {/* <Topbar /> */}
      </HeaderStyle1>
    </>
  );
};

export default WebHeader;
