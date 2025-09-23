import { ScrollTop, SectionTitle } from "@/components/sofbox";
import React from "react";
import { MeanStackConfig } from "./meanStackConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const metadata = {
  title: "Mean Full Stack",
};

const MeanStack = () => {
  return (
    <>
    <h1>Mean Full Stack Training in Udaipur </h1>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="contaienr mt-4">
          <SectionTitle
            title="MEAN Stack"
            subTitle="HTML/HTML5 CSS2/CSS3 BOOTSTRAP JavaScript MONGODB EXPRESSJS Angular NODEJS "
          />
        </div>
        <div className="container mt-4">
          {MeanStackConfig &&
            MeanStackConfig.map((ListData, index) => {
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
                        {ListData.Children.map((item, itemIndex) => (
                          <li
                            className="iq-tw-6"
                            key={`item-${index}-${itemIndex}`}
                          >
                            <span className="iq-font-black">
                              <p className="flex-icon">
                                <FontAwesomeIcon
                                  icon={["fas", "check-double"]}
                                  style={{
                                    minWidth: "16px",
                                    maxWidth: "16px",
                                    color: "#74C0FC",
                                  }}
                                />
                                {item.list}
                              </p>
                            </span>
                            {item.SubChild && (
                              <ul className="iq-mt-40 iq-list">
                                {item.SubChild.map(
                                  (subitem, subIndex) => (
                                    <li
                                      className="iq-tw-6 iq-mb-15 ml-5"
                                      key={`subitem-${index}-${subIndex}`}
                                    >
                                      <span className="iq-font-black">
                                        <p className="flex-icon">
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
                                        </p>
                                      </span>
                                      {subitem.SubChildren3 && (
                                        <ul className="iq-mt-40 iq-list">
                                          {subitem.SubChildren3.map(
                                            (
                                              subChildrens,
                                              subChildIndex
                                            ) => (
                                              <li
                                                className="iq-tw-6 ml-4 pt-3 mb-0"
                                                key={`subChildrens-${index}-${subChildIndex}`}
                                              >
                                                <i className="ion-chevron-right iq-mr-10 iq-font-blue iq-font-20" />
                                                <span className="iq-font-black">
                                                  {
                                                    subChildrens.sublist2
                                                  }
                                                </span>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
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

export default MeanStack;
