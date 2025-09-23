import { ScrollTop, SectionTitle } from "@/components/sofbox";
import React from "react";

export const metadata = {
  title: "Keen Lab",
};

const KeenLab = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle
            title="About KeenLab"
            subTitle="KeenLab is a fully integrated Diagnostic Management System specially designed for diagnostic centers. It consists of several modules that cover all activities of diagnostic center, which includes High degree of transparency of the diagnostic center through the Web,Overall reduction of operating costs; and savings on time and efforts, Ensures greater efficiency,Unlimited number of users,Has inbuilt database back up facility for safety and reliability, Generates different types of reports, Billing, Patient Report tracking etc. It can be deployed in any size environment, from a single center to a full-fledged, multi-location Diagnostics center. (Desktop, Multi-User LAN and Online Versions available.)
"
          />
          Keeninfotech
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default KeenLab;
