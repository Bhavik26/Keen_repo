import { ScrollTop, SectionTitle } from "@/components/sofbox";
import React from "react";
import { MernConfig } from "./mernConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Mern Full Stack Training in Udaipur",
};

const MernStack = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <h1>Mern Full Stack Training in udaipur</h1>
        <div className="contaienr mt-4">
          <SectionTitle
            title="MERN Stack"
            subTitle="HTML/HTML5 CSS2/CSS3  BOOTSTRAP JavaScript MONGODB EXPRESSJS REACTJS NODE JS"
          />
        </div>
        <div className="container mt-4">
          {MernConfig &&
            MernConfig.map((ListData, index) => {
              if (ListData.Children.length > 0) {
                return (
                  <div className="row" key={`ListData-${index}`}>
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          {ListData.title}
                        </h3>
                      </div>
                      <ul className="iq-mt-40 iq-list">
                        {ListData.Children.map((item, itemIndex) => {
                          return (
                            <li
                              className="iq-tw-6"
                              key={`item-${index}-${itemIndex}`}
                            >
                              <span className="iq-font-black">
                                <div className="flex-icon">
                                  <FontAwesomeIcon
                                    icon={["fas", "check-double"]}
                                    style={{
                                      minWidth: "18px",
                                      maxWidth: "18px",
                                      color: "#74C0FC",
                                    }}
                                  />
                                  {item.list}
                                </div>
                              </span>
                              {item.SubChild &&
                                item.SubChild.length > 0 && (
                                  <ul className="iq-tw-6 iq-mb-15 ml-5 mt-3">
                                    {item.SubChild.map(
                                      (subitem, subIndex) => {
                                        return (
                                          <li
                                            key={`subitem-${index}-${itemIndex}-${subIndex}`}
                                          >
                                            {/* <i className="ion-android-arrow-dropright-circle iq-mr-10 iq-font-blue iq-font-20" /> */}
                                            <span className="iq-font-black flex-icon">
                                              <FontAwesomeIcon
                                                icon={[
                                                  "fas",
                                                  "circle-play",
                                                ]}
                                                style={{
                                                  minWidth: "16px",
                                                  maxWidth: "16px",
                                                  color: "#74C0FC",
                                                }}
                                              />

                                              {subitem.subli}
                                            </span>
                                            {subitem.SubChildren3 &&
                                              subitem.SubChildren3
                                                .length > 0 && (
                                                <ul className="iq-tw-6 ml-4 pt-3 mb-0">
                                                  {subitem.SubChildren3.map(
                                                    (
                                                      subChildrens,
                                                      subChildIndex
                                                    ) => {
                                                      return (
                                                        <li
                                                          key={`subChildrens-${index}-${itemIndex}-${subIndex}-${subChildIndex}`}
                                                        >
                                                          <i className="ion-chevron-right iq-mr-10 iq-font-blue iq-font-20" />
                                                          <span className="iq-font-black">
                                                            {
                                                              subChildrens.sublist2
                                                            }
                                                          </span>
                                                        </li>
                                                      );
                                                    }
                                                  )}
                                                </ul>
                                              )}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default MernStack;
