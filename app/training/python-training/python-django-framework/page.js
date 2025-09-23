import { ScrollTop, SectionTitle } from "@/components/sofbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "Python Django Framework",
};
const PythonDjango = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works"
      >
        <div className="container mt-4">
          <SectionTitle title="Python Django Framework" />
        </div>
        <div className="container mt-4">
          <div className="row">
           
          <br/><br/> Module 1 :<br/>
Python introduction concept of programming about python 
Condition statement loops function list tuple dict set file handing error handing 
Python oops concept class object inheritance data abstractions encapsulation  method overfull overloading super  
<br/>Module 2 :<br/>
Database  structure wise unstructured wise  SQL Query mysql workbench use crud operations  insert update delete select key details primary unique foreign key INNER JOIN LEFT JOIN RIGHT JOIN CROSS JOIN  group by etc 

<br/>Module 3 :<br/>
UI UX html css css3 sass javascript  jquery bootshartp  json xml   react js intro. 
<br/>Module 4  :<br/>
Python django frame work  MVT structure  project start 
<br/>Module 5   :<br/>
 Aws server hosting project and github repository  create  live project 
 <br/>Module 6   :<br/>
Project report collage format presentation ppt    FAQ
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
};

export default PythonDjango;
