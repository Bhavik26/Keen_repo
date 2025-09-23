"use client";
import { mobileMenu } from "@/constants/menu";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  CardText,
} from "reactstrap";

const MobileMegaMenu = ({ toggleMenu }) => {
  const { push } = useRouter();
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [level, setLevel] = useState("");

  const levelToggle = (id) => {
    console.log("levelToggle", id);
    if (level === id) {
      setLevel();
    } else {
      setLevel(id);
    }
  };
  return (
    <>
      <Accordion flush open={open} toggle={toggle}>
        {mobileMenu &&
          mobileMenu.map((item, mobileIndex) => {
            if (item?.parentChild?.length > 0) {
              return (
                <React.Fragment key={`mobileMenuFragment${mobileIndex}`}>
                  <AccordionItem key={`mobileMenu${mobileIndex}`}>
                    <AccordionHeader targetId={mobileIndex}>
                      <a>
                        {item.name}
                        <i
                          className="fa fa-angle-down toggledrop"
                          aria-hidden="true"
                        />
                      </a>
                    </AccordionHeader>
                    <AccordionBody accordionId={mobileIndex}>
                      {item?.parentChild?.length > 0 &&
                        item?.parentChild.map(
                          (parentItem, parentIndex) => {
                            if (parentItem?.child?.length > 0) {
                              return (
                                <Accordion
                                  key={`mobileMenu${mobileIndex}-${parentIndex}`}
                                  flush
                                  open={level}
                                  toggle={levelToggle}
                                >
                                  <AccordionItem key={`accordionItem${mobileIndex}-${parentIndex}`}>
                                    <AccordionHeader
                                      targetId={`${mobileIndex}-${parentIndex}`}
                                    >
                                      <a>
                                        {parentItem.title}
                                        <i
                                          className="fa fa-angle-down toggledrop"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </AccordionHeader>

                                    {parentItem?.child.length > 0 &&
                                      parentItem?.child.map(
                                        (child, childIndex) => {
                                          return (
                                            <AccordionBody
                                              accordionId={`${mobileIndex}-${parentIndex}`}
                                              key={`accordionBody${mobileIndex}-${parentIndex}-${childIndex}`}
                                            >
                                              <CardText
                                                data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent"
                                                className="sub-child-card"
                                                onClick={() =>
                                                  push(child.href)
                                                }
                                              >
                                                {child.title}
                                              </CardText>
                                            </AccordionBody>
                                          );
                                        }
                                      )}
                                  </AccordionItem>
                                </Accordion>
                              );
                            } else {
                              return (
                                <CardText
                                  data-toggle="collapse"
                                  data-target="#navbarSupportedContent"
                                  aria-controls="navbarSupportedContent"
                                  className="sub-child-card"
                                  onClick={() => {
                                    toggleMenu(false);
                                    push(parentItem.href);
                                  }}
                                  key={`mobileMenu${parentIndex}`}
                                >
                                  {parentItem.title}
                                </CardText>
                              );
                            }
                          }
                        )}
                    </AccordionBody>
                  </AccordionItem>
                </React.Fragment>
              );
            } else {
              return (
                <div key={mobileIndex}>
                  <CardText
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    onClick={() => {
                      toggleMenu(false);
                      push(item.href);
                    }}
                  >
                    {item.name}
                  </CardText>
                </div>
              );
            }
          })}
      </Accordion>
    </>
  );
};

export default MobileMegaMenu;
