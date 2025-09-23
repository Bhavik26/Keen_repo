import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "CMS Wordpress",
};

const CmsWordPress = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle title="CMS Wordpress" />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  WordPress Introduction:
                </h3>
              </div>
              <ul className="iq-mt-40 iq-list">
                <li className="iq-tw-6">
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
                      Understanding and Using domain names
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
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
                      WordPress Hosting Options
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
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
                      Installing WordPress on a Dedicated Server
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
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
                      Understanding Directory Permissions
                    </p>
                  </span>
                </li>

                <li className="iq-tw-6">
                  <span className="iq-font-black">
                    <p className="flex-icon">
                      <FontAwesomeIcon
                        icon={["fas", "file"]}
                        style={{
                          minWidth: "16px",
                          maxWidth: "16px",
                          color: "#74C0FC",
                        }}
                      />
                      Basics of the WordPress User Interface
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <span className="iq-font-black">
                    <p className="flex-icon">
                      <FontAwesomeIcon
                        icon={["fas", "file"]}
                        style={{
                          minWidth: "16px",
                          maxWidth: "16px",
                          color: "#74C0FC",
                        }}
                      />
                      Finding and Using WordPress Plugins
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <span className="iq-font-black">
                    <p className="flex-icon">
                      <FontAwesomeIcon
                        icon={["fas", "file"]}
                        style={{
                          minWidth: "16px",
                          maxWidth: "16px",
                          color: "#74C0FC",
                        }}
                      />
                      Working with WordPress Themes
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <span className="iq-font-black">
                    <p className="flex-icon">
                      <FontAwesomeIcon
                        icon={["fas", "file"]}
                        style={{
                          minWidth: "16px",
                          maxWidth: "16px",
                          color: "#74C0FC",
                        }}
                      />
                      WordPress Content Management
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <span className="iq-font-black">
                    <p className="flex-icon">
                      <FontAwesomeIcon
                        icon={["fas", "file"]}
                        style={{
                          minWidth: "16px",
                          maxWidth: "16px",
                          color: "#74C0FC",
                        }}
                      />
                      Creating and Managing Content
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default CmsWordPress;
