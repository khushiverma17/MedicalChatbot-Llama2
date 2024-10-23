import React, { useState } from "react";
import '../modules/contact.css'
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (send to backend or email service)
    console.log("Name:", name, "Email:", email, "Message:", message);
    alert("Thank you for your feedback!");

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container" style={{zIndex: '20'}}>
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>
          We would love to hear your feedback, issues, or any other inquiries!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
