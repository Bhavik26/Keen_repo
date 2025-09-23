"use client";
import React from "react";
import { SectionStyle2 } from "../sofbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);


const Services = () => {
  return (
    <SectionStyle2 ids="software-features" small={true}>
      <div className="iq-software-demo">
        <img
          className="img-fluid"
          src="/assets/images/drive/05.svg"
          alt="drive05"
        />
      </div>
      <div className="col-lg-6 offset-lg-6">
        <div className="heading-title left text-left">
          <h3 className="iq-tw-7 iq-mb-25 title">
            Software Features
          </h3>
        </div>
        <p>
          Software provides you with many features that will help you
          to keep track and keep records of your business. Software is
          designed and build as per the customers requirement.{" "}
        </p>
        <ul className="iq-mt-40 iq-list">
          <li className="iq-tw-6 iq-mb-15">
            <span className="iq-font-black ">
              <p className="flex-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74C0FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                To keep records of customers such as contact
                information, support interactions and statistical
                data.
              </p>
            </span>
          </li>
          <li className="iq-tw-6 iq-mb-15">
            <span className="iq-font-blackflex-icon">
              <p className="flex-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74C0FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                It keeps information which can be retrieved when
                required.
              </p>
            </span>
          </li>
          <li className="iq-tw-6 iq-mb-15">
            <span className="iq-font-blackflex-icon">
              <p className="flex-icon">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{
                    minWidth: "24px",
                    maxWidth: "24px",
                    color: "#74C0FC",
                  }}
                />
                Software must be effective to gather, combine and
                analyze data so you can reveal crucial insights in
                making decisions Udaipur.
              </p>
            </span>
          </li>
          <li className="iq-tw-6 iq-mb-15">
            <span className="iq-font-blackflex-icon">
              <p className="flex-icon">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{
                    minWidth: "24px",
                    maxWidth: "24px",
                    color: "#74C0FC",
                  }}
                />
                The software built should support your business as it
                grows so that you don&apos;t have to transfer to
                another software and start from scratch.
              </p>
            </span>
          </li>
          <li className="iq-tw-6 iq-mb-15">
            <span className="iq-font-blackflex-icon">
              <p className="flex-icon">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  style={{
                    minWidth: "24px",
                    maxWidth: "24px",
                    color: "#74C0FC",
                  }}
                />
                The software should be able to add more users, provide
                advanced features, and give security.
              </p>
            </span>
          </li>
        </ul>
      </div>
    </SectionStyle2>
  );
};

export default Services;
