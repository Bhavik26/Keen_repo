import { ScrollTop, SectionTitle } from "@/components/sofbox";
import React from "react";

const Click4Doctor = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle
            title="About Click4Doctor"
            subTitle="Click4Doctor.in is a Search Engine for Doctor,Hospital,Diagnostic Center and Clinics."
          />
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default Click4Doctor;
