"use client";

import dynamic from "next/dynamic";
import SpotlightCard from "./SpotLightCard";

// Background particles 
const Particles = dynamic(() => import('./Particles'), { ssr: false });

export default function ServiceSection() {
  const services = [
    { title: "Audio", desc: "Indoor and Outdoor,Line array speakers,audio recording,digital sound desk & Backlines" },
    { title: "Production & Branding", desc: "We bring ideas to life through high-quality production and strategic branding.From concept to final delivery." },
    { title: "Projection Mapping", desc: "Transforming surfaces into immersive visual experiences." },
    { title: "Pro Lighting", desc: "Moving Heads,LED Par Cans,Laser & Spotlights,SFX etc." },
    { title: "Rigging & Automation", desc: "Stages,Aluminium Mega Truss,Chain Hoist etc." },
    { title: "LED Screen", desc: "Variety of led screen P1.9, P2.5, P2.9, P3.9, P4.9." },
    // { title: "Audio Studio", desc: "Vlive Events Studio in jeddah provides Orchestra and Singers for music events." },
    // { title: "Desert Safari", desc: "Vlive Events also offer Desert Safari Package.Experience the Safari With Us." },
    // { title: "Ship Voyage", desc: "We also offer a different experience in ship with entertainment shows." },
  ];

  const additionalServices = [
    "Creative designs", "Interactive Floor", "Furniture Rental", "Event Licensing Services", "Mall Kiosks",
    "Generator Services", "Wedding Plans", "Backlines", "Interactive Screen",
    "TV Rentals", "Video Production & Photography", "remote meeting (Zoom & Teams)", "Ceremonial decor",
    
  ];

  return (
    <div
      id="services"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "0px 20px",
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
        />
      </div>

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Animated Heading */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "4rem",
            animation: "fadeUp 1s ease forwards",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #8a2be2, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "floatHeading 3s ease-in-out infinite",
            }}
          >
            Our Services
          </h2>

          {/* Small Gradient Line Under Heading */}
          <div
            style={{
              width: "80px",
              height: "3px",
              margin: "0 auto 1.5rem",
              background: "linear-gradient(90deg, #8a2be2, #00ffff)",
              borderRadius: "10px",
            }}
          />

          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.85,
            }}
          >
            What we deliver to power your brand
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
            marginBottom: "4rem",
          }}
        >
          {services.map((service, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(138, 43, 226, 0.35)"
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {service.title}
              </h3>
              <p style={{ opacity: 0.75, fontSize: "0.95rem" }}>
                {service.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>

          {/* Other Services Heading */}
<div
  style={{
    textAlign: "center",
    marginBottom: "2rem",
  }}
>
  <h3
    style={{
      fontSize: "1.6rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      background: "linear-gradient(90deg, #8a2be2, #00ffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Other Services
  </h3>
</div>

        {/* Additional Services Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            textAlign: "left",
            color: "#ffffff",
            fontSize: "1.1rem", // increased text size
            opacity: 0.9,
            padding: "0 10px",
            marginBottom: "4rem",
          }}
        >
          {additionalServices.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                paddingLeft: "2rem", // more space for bullet
                cursor: "default",
                transition: "transform 0.3s ease",
              }}
              className="service-point"
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  color: "#00ffff",
                  fontWeight: "bold",
                  fontSize: "1.4rem", // increased bullet size
                }}
              >
                •
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for fadeUp and float animation + hover effect for points */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatHeading {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          .service-point:hover {
            transform: translateX(5px);
            color: #00ffff;
          }
        `}
      </style>
    </div>
  );
}
