import React from "react";

function Contact() {
  return (
    <div>
      <div id="contact">
        <h3>Send Me a Mail</h3>
        <div className="contact-input">
          <input type="email" placeholder="example@gmail.com" />
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
