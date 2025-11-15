import React, { useRef } from "react";
import "./Contact.css";
import Facebook from "../../assets/Fb.png";
import Insta from "../../assets/Insta.png";
import X from "../../assets/X.png";
import Linkden from "../../assets/Linkden.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    const name = form.current.user_name.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm("service_wt3yiul", "template_aog03vj", form.current, {
        publicKey: "DFXSsoESjG5LCjETI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact" className="contactPage">
        <h1 className="contactPageTitle">Contact Me </h1>
        <span className="contactDescription">
          Enter your details below to reach out if you're interested in
          discussing any exciting and new work opportunities with me.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="6"
            placeholder="Your Message"
          />
          <button type="submit" className="submitBtn" value="send">
            Submit
          </button>
        </form>
        <div className="links">
  <a href="https://www.linkedin.com/in/sudeep-sahas-3745a0290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <img src={Linkden} alt="LinkedIn" className="Linkden link" />
  </a>

  <a href="https://www.instagram.com/sahas.akaay_kohli" target="_blank" rel="noopener noreferrer">
    <img src={Insta} alt="Instagram" className="Insta link" />
  </a>

  <a href="https://www.facebook.com/sudeepsahas" target="_blank" rel="noopener noreferrer">
    <img src={Facebook} alt="Facebook" className="Fb link" />
  </a>

  <a href="https://x.com/jilebikavala" target="_blank" rel="noopener noreferrer">
    <img src={X} alt="X" className="x link" />
  </a>
</div>

      </section>
    </div>
  );
};

export default Contact;
