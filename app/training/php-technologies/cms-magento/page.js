import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "CMS- Magento (E-commerce )",
};

const CmsMagento = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle title="CMS- Magento (E-commerce )" />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Overview of the PHP:
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
                      Introduction of different Web Technology
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
                      What is PHP
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
                      How PHP Works
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
                      Summary
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
                      Setting up and Installing Magento
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
                      HTML, CSS & JavaScript
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
                      Magento
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
                      MY SQL
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
                      AJAX (Asynchronous JavaScript and XML)
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
                      Sending Emails
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
                      Deployment
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
                      Live Project
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

export default CmsMagento;
