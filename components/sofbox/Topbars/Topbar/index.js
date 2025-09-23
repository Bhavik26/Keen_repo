import React from 'react';


const Index = () => {

    return (
        <>
            <div className="bg-dark iq-ptb-10 header-top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto mr-auto">
                            <ul className={"mb-0"}>
                                <li>
                                    <a href="tel:+91 9269573303">
                                        <i className="fas fa-phone-alt iq-mr-10" aria-hidden="true" />
                                        <span className="iq-font-white">+91 9269573303</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <div className="social-bar">
                                <ul className={"mb-0"}>
                                    <li><a target='_blank' rel="noreferrer" href="https://www.facebook.com/KeenInfotech/"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a target='_blank' rel="noreferrer" href="https://twitter.com/keeninfotech"><i className="fab fa-twitter" /></a></li>
                                    <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/keeninfotech/"><i className="fab fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Index;
