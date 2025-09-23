import ContactUs from "@/components/ContactUs/page";
import { sendmail } from "@/lib/mail";
import React from "react";

export const metadata = {
  title: "Contact Us  Keen infotech Udaipur",
};

const Contact = () => {
  const send = async (values) => {
    "use server";

    await sendmail({
      to: values.values.email,
      name: values.values.name,
      subject: values.values.name,
      body: `
      <h1>${values.values.training}</h1>
      <p>City: ${values.values.city}</p>
      <p>Phone: ${values.values.phone}</p>
      <p>Message: ${values.values.message}</p>
      `,
    });
  };
  return (
    <div style={{marginTop: "100px"}}>
      <ContactUs send={send} />
    </div>
  );
};

export default Contact;
