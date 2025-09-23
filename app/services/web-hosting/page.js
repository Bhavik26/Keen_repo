import { SectionTitle } from "@/components/sofbox";
import React from "react";

export const metadata = {
  title: "Web Hosting",
};
const WebHosting = () => {
  return (
    <section
      id="how-it-works"
      className="overview-block-ptb it-works"
    >
      <h1> Web Hosting Company in Udaipur Rajasthan India</h1>
      <div className="container mt-4">
        <SectionTitle
          title="Web Hosting"
          subTitle="The purpose of deploying a truly well engineered website that serves as a connection between your company and your online audience is fulfilled only when your website is hosted in a professional and state-of-the-art hosting environment. AT Keen Infotech, we can not only build a full-featured website for you, we can host it for you too. If you already have a website that is functional, we can migrate it for you so that you can take full advantage of our powerful web hosting services. from simple web hosting services to web servers that support sophisticated applications such as enterprise hosting, mobile application hosting, e-commerce hosting complete with a shopping cart and super secure web hosting servers for financial applications, we provide services that fit every need."
        />
      </div>
    </section>
  );
};

export default WebHosting;
