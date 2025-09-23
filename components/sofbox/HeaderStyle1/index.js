"use client";
import React, { useEffect, useState } from "react";
import Link from "../Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChildMenu = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const navItem = props.child;
  const listItems = navItem.map((item, index) => (
    <li
      key={index}
      className={
        "menu-item menu-item-type-post_type menu-item-object-page menu-item-506"
      }
    >
      <Link activeClassName="active" href={item.href} legacyBehavior>
        <a
          onClick={() => handleClick(index)}
          className={activeIndex === index ? "active" : ""}
        >
          {item.title}
        </a>
      </Link>
      {item.child && (
        <ul className={"sub-menu sub-child-menu"}>
          {item.child.map((child2, index2) => (
            <li
              key={`sub-menu-${index}-${index2}`}
              className={
                "menu-item menu-item-type-post_type menu-item-object-page menu-item-506"
              }
            >
              <Link
                activeClassName="active"
                href={child2.href}
                legacyBehavior
              >
                <a className={activeIndex === index ? " active" : ""}>
                  {child2.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <ul className={"sub-menu sub-child-menu d-flex flex-column list-unstyled"}>
      {listItems}
    </ul>
  );
};

const Navigation = (props) => {
  const navItems = props.navItemList;
  const listItems = navItems.map((option, key) => (
    <li className="nav-item menu-item position-relative" key={key}>
      <Link href={option.href} legacyBehavior>
        <a className="nav-link">
          {option.title}
          {option.children && (
            <i
              className="fa fa-angle-down toggledrop"
              aria-hidden="true"
            />
          )}
        </a>
      </Link>

      {option.children && <ChildMenu child={option.child} />}
    </li>
  ));
  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end menu" style={{ whiteSpace: "nowrap" }}>
      {listItems}
    </ul>
  );
};

const HeaderStyle1 = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const topbar = children.find(child => child.type === Topbar) && false;

  return (
    <>
      <header
        id="main-header"
        className={isSticky ? "menu-sticky" : ""}
      >
        {props.children}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    className="img-fluid"
                    id={
                      props.styledLogo !== undefined &&
                      props.styledLogo
                        ? "logo_img"
                        : "new_image"
                    }
                    src={props.logoImg || "/assets/images/keen-logo2.png"}
                    alt="Keen Infotech"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleMenu}
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FontAwesomeIcon
                    icon={["fas", "bars"]}
                    style={{
                      color: "#74C0FC",
                      maxWidth: "22px",
                    }}
                  />
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    isMenuOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <div className="mb-nav justify-content-end w-100 overflow-visible">
                    <Navigation navItemList={props.navItems} />
                  </div>

                  {props.buttonSection}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStyle1;
