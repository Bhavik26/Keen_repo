"use client";
import { ContactForm } from "@/components/sofbox";
import React from "react";
import { Button, Card, CardBody, CardText } from "reactstrap";

const ContactUs = ({ send }) => {
  return (
    <>
      <section id="contact-us" className="footer-info white-bg">
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="iq-get-in">
                <h4 className="iq-tw-7 iq-mb-20">
                  General Enquiry or Apply for free demo
                </h4>
                <ContactForm send={send} />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="iq-get-in">
                <h4 className="iq-mb-20 get-in">
                  Get in <b>Touch</b>
                </h4>
                <p>
                  <b>
                    All communications will be answered within 24
                    hours
                  </b>
                  <br />
                  Please fill up the below form and you will get an
                  email or phone call from our course coordinator in
                  next 24 hours who will answer all your questions and
                  help you choose the right carrer option!
                </p>

                <hr />

                <h4 className="iq-mb-20 mt-4 get-in">
                  <b>Keen Infotech</b> Udaipur
                </h4>
                <Card>
                  <CardBody>
                    <CardText>
                      <Button className="btn-contact">
                        <i className="ion-location" size="lg" />
                      </Button>
                      <b>Address:</b> IIIrd Floor, Mehta Sadan, Durga
                      Nursary Road, Near Sukhadia Memorial, Udaipur -
                      313001, Rajasthan (INDIA)
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText>
                      <Button className="btn-contact">
                        <i className="ion-ios-telephone" size="lg" />
                      </Button>
                      {/* <a className="loc-i"><i className="ion-ios-telephone" /></a> */}
                      <b>Phone:</b> 0294-2413542
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText>
                      <Button className="btn-contact">
                        <i className="ion-ios-telephone" size="lg" />
                      </Button>
                      {/* <a className="loc-i"><i className="ion-ios-telephone" /></a> */}
                      <b>Mobile: </b>
                      <a href="tel: 9269573303">
                        <span>9269573303</span>
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardText>
                      <Button className="btn-contact">
                        <i className="ion-ios-email" size="lg" />
                      </Button>
                      {/* <a className="loc-i"><i className="ion-ios-email" /></a> */}
                      <b>Email:</b>
                      <a href="mailto:info@keeninfotech.com">
                        {" "}
                        info@keeninfotech.com
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
