
// components/ContactForm.js
"use client"
import React, { useState } from "react";

const initValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  training: "",
  message: "",
};

const ContactForm = ({ send }) => {
  const [values, setValues] = useState(initValues);
  const [successMessage, setSuccessMessage] = useState("");

  const inputChangedHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    send({
      values,
    });
  };

  const isFormValid = () => {
    return Object.values(values).every((val) => val.trim() !== "");
  };

  return (
    <form>
      <div className="contact-form">
        <div className="section-field">
          <input
            className="require"
            id="contact_name"
            value={values.name}
            type="text"
            placeholder="Name*"
            name="name"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <div className="section-field">
          <input
            className="require"
            id="contact_email"
            value={values.email}
            type="email"
            placeholder="Email*"
            name="email"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <div className="section-field">
          <input
            className="require"
            id="contact_phone"
            value={values.phone}
            type="text"
            placeholder="MobileNo*"
            name="phone"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <div className="section-field">
          <input
            className="require"
            id="contact_city"
            value={values.city}
            type="city"
            placeholder="City*"
            name="city"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <div className="section-field">
          <input
            className="require"
            id="contact_training"
            value={values.training}
            type="training"
            placeholder="Courses/Training*"
            name="training"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <div className="section-field textarea">
          <label htmlFor="contact_message" />
          <textarea
            id="contact_message"
            value={values.message}
            className="input-message require"
            placeholder="Comments*"
            rows="2"
            name="message"
            required
            onChange={inputChangedHandler}
          />
        </div>
        <button
          id="submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (isFormValid()) {
              handleSubmit(e);
            }
          }}
          className={`button iq-mt-15 ${
            isFormValid() ? "" : "disabled"
          }`}
          disabled={!isFormValid()}
          style={{
            cursor: !isFormValid() ? "not-allowed" : "pointer",
          }}
        >
          Send Message
        </button>
        {successMessage && (
          <div
            className="alert alert-success alert-dismissible fade"
            role="alert"
          >
            <strong>{successMessage}</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setSuccessMessage("")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
