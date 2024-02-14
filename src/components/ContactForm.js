import React, { useState } from "react";
import axios from "axios";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(formData);

      await axios.post("/api/contact", body, config);

      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err.response.data);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="left-column">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="right-column">
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <button className="submit-button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
