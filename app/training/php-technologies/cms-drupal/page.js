import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "Cms Drupal",
};

const CmsDrupal = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle title="CMS Drupal Training" />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Introduction Drupal :
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
                      Introduction to CMS and Drupal
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
                      Drupal&apos;s requirements and how it works
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
                      What Can Drupal Do?
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
                      Installing Drupal
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
                      Downloading and installing Drupal on a system
                    </p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 2</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 3</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Function</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 4</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 5</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 6</p>
                  </span>
                </li>
                <li className="iq-tw-6">
                  <i className="ion-android-document iq-mr-10 iq-font-blue iq-font-30" />
                  <span className="iq-font-black">
                    <p>Session 7</p>
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

export default CmsDrupal;
