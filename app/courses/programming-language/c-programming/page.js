import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "C Programming",
};

const CProgram = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle
            title="About C Language"
            subTitle="C is a general-purpose, procedural, imperative computer programming language.
C was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs and used to
re-implement the Unix operating system.It has since become one of the most widely used
programming languages of all time with C compilers from various vendors available for the
majority of existing computer architectures and operating systems. C has been standardized by
the American National Standards Institute (ANSI) since 1989 (see ANSI C) and subsequently by
the International Organization for Standardization (ISO)."
          />
        </div>

        <div className="container mt-4">
          <SectionTitle title="C Programming Course Outline" />
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Introduction to C Programming
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
                      Introduction to C
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
                      Why use C?
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
                      Uses of C
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
                      Constants, Variables and Keywords
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
                      Operators
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
                      The First C Program
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
                      Compilation and Execution
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
                      Integer and Float Conversions
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
                      Type Conversion in Assignments
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
                      Receiving Input
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
                      Hierarchy of Operations
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Decisions And Branching
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
                      if Statement
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
                      if else Statement
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
                      Nested ifs
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
                      The if-else-if Ladder
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
                      The switch Statement
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
                      Nested switch Statements
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title left text-left">
                <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                  Looping Statements
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
                      While Loop
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
                      Do While Loop
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
                      For Loop
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
                      Nested Loop
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
                      Directory Submission
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
                      Break Statment
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
                      Continue Statement
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
                      Go to Statement
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
                      />{" "}
                      Functions & Pointers
                    </p>
                  </span>
                </li>{" "}
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          What is a Function
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
                              Why Use Functions
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
                              Passing Values between Functions
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
                              Function Declaration and Prototypes
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
                              Call by Value and Call by Reference
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
                              An Introduction to Pointers
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
                              Recursion
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Data Types
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
                              Integers, long and short
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
                              Integers, signed and unsigned
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
                              Chars, signed and unsigned{" "}
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
                              Floats and Doubles
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Storage Classes
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
                              Automatic Storage Class
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
                              Register Storage Class
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
                              Static Storage Class
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
                              External Storage Class
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          C Preprocessor
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
                              Features of C Preprocessor
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
                              Macro
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
                              File Inclusion
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
                              Conditional Compilation
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Arrays
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
                              What are Arrays
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
                              Array Initialization
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
                              Passing Array Elements to a Functi
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
                              Pointers and Arrays
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
                              Array Sorting(Bubble sort and Selection
                              Sort)
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
                              Array Searching (Linear Search And
                              Binary Search)
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
                              Two Dimensional Arrays
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
                              Initializing a 2-Dimensional Array
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
                              Pointers and 2-Dimensional Arrays
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
                              Passing 2-D array to a Function
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
                              Array of Pointers
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Strings
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
                              What are Strings
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
                              Pointers and Strings
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
                              Standard Library String Functions
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
                              Two-Dimensional Array of Characters
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
                              Array of Pointers to Strings
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Structures
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
                              Why Use Structures
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
                              Accessing Structure Elements
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
                              Passing and returning structures
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
                              Array of Structures
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
                              Pointers and structures
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Console Input/Output
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
                              Console I/O Functio
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
                              Formatted Console I/O Functions
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
                              Unformatted Console I/O Functions
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          File Input/Output
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
                              File Operations(Opening,Closing,Reading
                              from File)
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
                              A File-copy Program
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
                              File Opening Modes
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
                              String I/O in Files
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
                              Record I/O in Files
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
                              Text Files and Binary Files
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
                              Database Management
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title mt-3">
                          Miscellaneous Features
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
                              Enumerated Data Type
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
                              Renaming Data Types with typedef
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
                              Typecasting
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
                              Bit Fields
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
                              Pointers to Functions
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
                              Functions Returning Pointers
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
                              Functions with Variable Number of
                              Arguments
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
                              Unions
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
                              Union of Structures
                            </p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default CProgram;
