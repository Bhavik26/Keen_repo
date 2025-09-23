"use client";
import About from "@/components/About/page";
import Blog from "@/components/Blog/page";
import Clients from "@/components/Clients/page";
import Contact from "@/components/ContactUs/page";
import Services from "@/components/Services/page";
import Specialities from "@/components/Specialities/page";
import { ScrollTop, SectionStyle1 } from "@/components/sofbox";
import ParallaxHeroStyle1 from "@/components/sofbox/ParallaxHeroStyle1";
import Typewriter from "typewriter-effect";
import { CiPlay1 } from "react-icons/ci";

export default function Home() {
  return (
    <>
       
        <meta name="google-site-verification" content="t26qNhoe5HfEl3nUC3r0yLU0WG56oDbvmWiVK3n_sxE" />
      

      

      <ParallaxHeroStyle1
        ids="iq-home"
        className={
          "iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"
        }
      >
        <div className="container-fluid">
          <div className="banner-text">
            <div className="row">
              <div className="col-lg-6 type-head">
                <h1 className="text-uppercase iq-font-white iq-tw-3">
                  <Typewriter
                    options={{
                      strings: [
                        "6 Months Industrial Training",
                        "python webApp Development and Training","AWS server project deployment and Training",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="iq-font-white iq-pt-15 iq-mb-40">
                  6 Months Industrial Training for MCA and B.Tech
                  Students  python mern stack php aws in Udaipur We are happy to assist you in
                  your career oriented 6 Months Industrial Training
                  for MCA and B.Tech Students.
                </p>
                <div className="waves-box">
                  <a
                    href="https://www.youtube.com/watch?v=oM389HsPhxs"
                    className="iq-video popup-youtube"
                  >
                    <CiPlay1 className=" ion-ios-play-outline" />
                  </a>
                  <div className="iq-waves">
                    <div className="waves wave-1" />
                    <div className="waves wave-2" />
                    <div className="waves wave-3" />
                  </div>
                </div>
                <a
                  href="tel:+91 9269573303"
                  className="button bt-black iq-mt-5 iq-ml-40"
                >
                  Call : +91 9269573303
                </a>
              </div>
              <div className="col-lg-6 type-img">
                <img
                  className="banner-img"
                  src="/assets/images/banner/Maine image .svg"
                  alt="drive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-objects">
          <span
            className="banner-objects-01"
            data-bottom="transform:translatey(50px)"
            data-top="transform:translatey(-50px);"
          >
            <img src="/assets/images/drive/03.png" alt="drive02" />
          </span>
          <span className="banner-objects-02 iq-fadebounce">
            <span className="iq-round" />
          </span>
          <span className="banner-objects-03 iq-fadebounce">
            <span className="iq-round" />
          </span>
        </div>
      </ParallaxHeroStyle1>

      <div className="main-content">
        <About />

        <SectionStyle1 id={"what_can_do"} rowReverse={true}>
          <div className="col-lg-6 align-self-center">
            <img
              className="iq-works-img pull-right img-fluid"
              src="/assets/images/drive/01.svg"
              alt="drive01"
            />
          </div>
          <div className="col-lg-6">
            <div className="heading-title left text-left">
              <h3 className="iq-tw-7 iq-mb-25 title">
                What can Technology do ?
              </h3>
            </div>
            <p>
              Communications technologies We now live in a global
              economy with a knowledge-based marketplace, where the
              ultimate measure of our success is becoming less about
              what we know, but more about what we do with what we
              know, and learning new skills to fit a rapidly changing
              world.
            </p>
            <p className="iq-mt-20">
              Technology has helped to accelerate this pace of change,
              retooling nearly every aspect of our daily life, from
              how we communicate, to how we shop, to how we receive
              medical care. Schools — many of which have been slow to
              embrace innovation — are beginning to engage in this
              digital revolution.
            </p>
            <h6 className="iq-tw-6 iq-mb-15 iq-mt-25">
              The $8 billion education technology sector has helped to
              make these changes possible, but we need to do even
              more.
            </h6>
            <a href="#" className="button iq-mt-20">
              Click Here
            </a>
          </div>
        </SectionStyle1>
        <Services />

        <Specialities />

        {/* Blog section */}
        <Blog />

        {/* Client section */}
        <Clients />
      </div>
      <Contact />

      {/* Scroll top */}
      <ScrollTop />
    </>
  );
}
