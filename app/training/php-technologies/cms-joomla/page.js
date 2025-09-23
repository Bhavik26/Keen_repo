import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "CMS Joomla Training",
};

const CmsJoomla = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle title="CMS Joomla Training" />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Joomla! set up:
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
                      Selecting your hosting environment
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
                      Installation and configurations
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
                      Moving your site from A to B
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
                      Updating your site
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
                      Core concepts… what are they?
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
                      SEO for Joomla
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
                      Performance & Security
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
                      Extending Joomla
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
                      Integration with other sites and systems
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

export default CmsJoomla;
