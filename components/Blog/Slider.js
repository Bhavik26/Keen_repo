import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


const DataSlider = ({ data }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <div className="item" style={{ margin: "0 10px" }}>
              <div className="iq-blog-box">
                <div className="iq-blog-detail">
                  <div className="blog-title">
                    <a href="#">
                      <h5 className="iq-tw-7 iq-mb-10">
                        {item.title}
                      </h5>
                    </a>
                  </div>
                  <div className="blog-content">
                    <p>{item.des}</p>
                  </div>
                  <div className="iq-blog-meta">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#74C0FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5 }}>
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>

                          {item.link}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i
                            className="fa fa-calendar"
                            aria-hidden="true"
                            style={{ marginRight: 5 }}
                          />
                          {item.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default DataSlider;
