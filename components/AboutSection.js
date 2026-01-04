"use client";

import dynamic from "next/dynamic";
import MagicBento from "./MagicBento";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function AboutSection() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "100px 20px",
        overflowX: "hidden",
        overflowY: "visible",
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

      {/* Foreground Content - Animated About Us Heading */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 4rem",
          animation: "fadeUp 1s ease forwards",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
            fontWeight: 800,
            marginBottom: "0.8rem",
            letterSpacing: "1px",
            background: "linear-gradient(90deg, #8a2be2, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "floatHeading 3s ease-in-out infinite",
          }}
        >
          About Us
        </h2>

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
          Discover who we are and what makes us different
        </p>
      </div>

      {/* MagicBento overlay (centered and responsive) */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Keyframes for fadeUp and float animation */}
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
        `}
      </style>
    </div>
  );
}
