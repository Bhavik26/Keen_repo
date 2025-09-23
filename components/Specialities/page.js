import React from "react";
import { CardStyle6 } from "../sofbox";
import { FaPython } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaQuestion } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import { RxMagicWand } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBoxModel } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Specialities = () => {
  let list = [
    {
      icon: <FaPython />,
      title: "Python",
      description: "Python professional certification.",
    },
    {
      icon: <FaArrowRightArrowLeft />,
      title: "Advance java",
      description:
        "Advanced Java is everything that goes beyond Core Java.",
    },
    {
      icon: <BsAndroid2 />,
      title: "Android App Development",
      description:
        "An android Development designs software and applications for Android devices.",
    },
    {
      icon: <FaQuestion />,
      title: "Advanced Core PHP",
      description:
        "Core PHP requires in-depth knowledge to create web pages and applications.",
    },
    {
      icon: <RxMagicWand />,
      title: "Full stack react development",
      description:
        "A full stack web developer is a person who can develop both client and server software.",
    },
    {
      icon: <IoIosSearch />,
      title: "Advanced SEO",
      description:
        "Advanced SEO is simply any set of SEO techniques.",
    },
    {
      icon: <IoSettingsOutline />,
      title: "AWS Training Udaipur",
      description:
        "aws Traning in udaipur full stack development udaipur.",
    },
    {
      icon: <TbBoxModel />,
      title: "PPC",
      description:
        "Pay-per-click (PPC) is an internet advertising model used to drive traffic to websites.",
    },
  ];
  return (
    <>
      <section className="overview-block-ptb iq-specialities" style={{ backgroundColor: '#f6f8fb' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="heading-title">
                <h3 className="title iq-tw-7">
                  Keen Infotech Specialities{" "}
                </h3>
                <p>
                  Keen Infotech ISO 9001-2008 Certified Software &
                  Website Development Training Institute for MCA and
                  B.Tech Student
                </p>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 500, disableOnInteraction: false }}
            dir="rtl"
            loop
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            style={{ padding: '20px 0' }}
          >
            {list.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  width: '200px',
                  height: '250px',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: '#87CEEB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}>
                    {React.cloneElement(item.icon, { size: 35 })}
                  </div>
                  <h5 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px' }}>
                    {item.title}
                  </h5>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Specialities;
