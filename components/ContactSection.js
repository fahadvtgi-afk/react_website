"use client";

import dynamic from "next/dynamic";
import { FiMail, FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function ContactSection() {
  return (
    <div
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "150px 20px",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
    >
      {/* Background Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles particleColors={["#ffffff", "#00ffff"]} particleCount={150} />
      </div>

      {/* Animated Heading */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 4rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "0.8rem",
            letterSpacing: "1px",
            background: "linear-gradient(90deg, #8a2be2, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "floatHeading 3s ease-in-out infinite",
          }}
        >
          Get In Touch
        </h2>

        {/* Gradient line under heading */}
        <div
          style={{
            width: "80px",
            height: "3px",
            margin: "0 auto 1.5rem",
            background: "linear-gradient(90deg, #8a2be2, #00ffff)",
            borderRadius: "10px",
          }}
        />

        <p style={{ opacity: 0.85, fontSize: "1.25rem" }}>
          We’re ready to make your event unforgettable. Reach out to us for more information.
        </p>
      </div>

      {/* Centered container for map and cards */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "0 auto" }}>
        {/* Google Map  */}
        <div style={{ marginBottom: "3rem", borderRadius: "12px", overflow: "hidden" }}>
          <iframe
            src="https://www.google.com/maps?q=21.5688934,39.1757965&hl=en&z=17&output=embed"
            width="100%"      
            height="400"     
            style={{ border: 0, borderRadius: "12px", display: "block", margin: "0 auto" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />

        </div>

        {/* Contact Details Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { icon: <FiMapPin size={36} />, title: "Address", detail: "Abdulaziz, Al Faisaliya 3064, Building: 7463, PO-23442" },
            { icon: <FiPhone size={36} />, title: "Call Us", detail: "+966 53 098 6381" },
            {
              icon: <FiMail size={36} />,
              title: "Email Us",
              detail: (
                <a href="mailto:info@vlivevision.com" style={{ color: "#00ffff", textDecoration: "none" }}>
                  info@vlivevision.com
                </a>
              ),
            },
            {
              icon: <FiInstagram size={36} />,
              title: "Instagram",
              detail: (
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00ffff", textDecoration: "none" }}
                >
                  @liveeventksa
                </a>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
                minWidth: "220px",
                flex: "1 1 200px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              className="contact-card"
            >
              <div style={{ color: "#00ffff", transition: "all 0.3s ease" }}>{item.icon}</div>
              <h3 style={{ margin: "0.5rem 0", fontSize: "1.25rem", fontWeight: "600" }}>{item.title}</h3>
              <p style={{ fontSize: "1rem", opacity: 0.85 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effects + Heading Animation */}
      <style>
        {`
          .contact-card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.12);
          }
          .contact-card:hover svg {
            color: #ff00ff;
          }

          @keyframes floatHeading {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
