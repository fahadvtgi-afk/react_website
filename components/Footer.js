"use client";

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #000010, #060020)",
        color: "white",
        padding: "50px 20px",
        borderTop: "2px solid #00ffff",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/logob.png" alt="Company Logo" width={120} height={60} />
        </div>

        {/* Contact Info */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <FiMapPin size={22} color="#00ffff" />
            <span>Al Baghdadiyah, Jeddah, KSA</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <FiPhone size={22} color="#00ffff" />
            <span>+966 0126 423 153</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <FiMail size={22} color="#00ffff" />
            <span>
              <a
                href="mailto:info@liveeventksa.com"
                style={{ color: "#00ffff", textDecoration: "none" }}
              >
                info@liveeventksa.com
              </a>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {[
            { icon: <FiInstagram />, url: "https://www.instagram.com/liveeventksa" },
            { icon: <FiFacebook />, url: "https://www.facebook.com/your_facebook_page" },
            { icon: <FiTwitter />, url: "https://twitter.com/your_twitter_handle" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00ffff",
                fontSize: "1.5rem",
                display: "inline-flex",
                transition: "all 0.3s ease",
              }}
              className="footer-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <p
        style={{
          fontSize: "0.95rem",
          opacity: 0.8,
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        © 2026 VLive Vision. All rights reserved.
      </p>

      {/* Hover Effects */}
      <style>
        {`
          /* Only Social Icons Hover */
          .footer-icon:hover {
            color: #ff00ff;
            transform: scale(1.3);
          }

          /* Responsive Adjustments */
          @media (max-width: 900px) {
            footer > div {
              flex-direction: column;
              align-items: center;
              gap: 25px;
            }
          }
        `}
      </style>
    </footer>
  );
}
