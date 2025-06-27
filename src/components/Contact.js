// Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

     emailjs
      .sendForm(
        "service_kjgnihn",   // Replace with your EmailJS service ID
        "template_i8zr4ta",  // Replace with your EmailJS template ID
        formRef.current,
        "z-EXX9a-CCPKbQ8xG"       // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent!");
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <FadeInSection delay={0.2}>
      <section
        id="contact"
        style={{
          backgroundColor: "var(--card)",
          borderRadius: "12px",
          padding: "2rem 1.5rem",
          maxWidth: "600px",
          margin: "2rem auto",
          boxShadow: "0 10px 30px white",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "var(--text)" }}>
          Let’s Work Together
        </h2>
        <p style={{ marginBottom: "1.5rem", color: "white" }}>
          Have a project or idea? I’d love to hear from you.
        </p>

        <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <button type="submit" style={buttonStyle}>
            📩 Send Message
          </button>
        </form>

        {status && (
          <p style={{ marginTop: "1rem", fontWeight: "bold", color: "var(--link)" }}>
            {status}
          </p>
        )}
      </section>
    </FadeInSection>
  );
}

const inputStyle = {
  padding: "0.8rem 1rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  backgroundColor: "",
  color: "var(--text)",
};

const buttonStyle = {
  backgroundColor: "var(--link)",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1.2rem",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.3s ease",
};

