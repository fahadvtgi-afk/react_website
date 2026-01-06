'use client';
import { useEffect } from "react";

import GridScan from "../components/GridScan";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import WorksSection from "../components/WorksSection";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }
}, []);
  return (
    <div style={{ width: "100%" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <GridScan
          enableWebcam={false}
          showPreview={false}
          lineThickness={1.5}
          linesColor="#392e4e"
          scanColor="#FF9FFC"
          scanOpacity={0.5}
          gridScale={0.15}
          lineStyle="solid"
          lineJitter={0.05}
          scanDirection="pingpong"
          className=""
          style={{ width: "100%", height: "100%" }}
        />

        {/* Animated Hero Heading */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 15px rgba(0,0,0,0.7)",
            zIndex: 10,
          }}
        >
          <h1 className="hero-heading">
            POWERFUL EVENTS <br />POWERED BY VLIVE VISION.
          </h1>
        </div>

        {/* Hero Heading Animations */}
        <style>
          {`
            .hero-heading {
              font-size: clamp(2.5rem, 6vw, 4rem);
              line-height: 1.2;
              background: linear-gradient(90deg, #ff00ff, #00ffff, #ffbf00, #ff00ff);
              background-size: 300% 300%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientShift 6s ease infinite, floatText 3s ease-in-out infinite;
            }

            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes floatText {
              0% { transform: translateY(-5px); }
              50% { transform: translateY(5px); }
              100% { transform: translateY(-5px); }
            }
          `}
        </style>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServiceSection />
      </section>

      {/* Works Section */}
      <section id="works">
        <WorksSection />
      </section>
      <section id="clients">
  <ClientsSection />
</section>
<section id="contact">
  <ContactSection />
</section>


    </div>
  );
}
