"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";

// Dynamic import of Particles for background (no SSR)
const Particles = dynamic(() => import("../../components/Particles"), {
  ssr: false,
});

// Styles for form inputs
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
};

const ContactPage: FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "100px 20px",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
    >
      {/* Background Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
       <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="your-class-name"
        />
      </div>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #8a2be2, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h1>

        <p style={{ opacity: 0.8, marginBottom: "3rem" }}>
          Let’s discuss your next powerful event
        </p>

        {/* Contact Form */}
        <form
          style={{
            display: "grid",
            gap: "1.2rem",
            textAlign: "left",
          }}
        >
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />
          <textarea placeholder="Your Message" rows={5} required style={inputStyle} />

          <button
            type="submit"
            style={{
              marginTop: "1rem",
              padding: "0.9rem",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              color: "#000",
              background: "linear-gradient(90deg, #8a2be2, #00ffff)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
