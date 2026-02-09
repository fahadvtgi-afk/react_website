"use client";

import dynamic from "next/dynamic";
//import MagicBento from "./MagicBento";

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
          Who We Are
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
          We Love What We Do
        </p>
      </div>

      {/* MagicBento overlay (centered and responsive) */}
     {/* Magic Bento Style Single Card */}
{/* Glow Focus Centered Text */}
<div
  style={{
    position: "relative",
    zIndex: 5,
    marginTop: "4rem",
    textAlign: "center",
    padding: "3rem 20px",
  }}
>
  {/* soft glow behind text */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at center, rgba(138,43,226,0.25), transparent 65%)",
      filter: "blur(40px)",
      zIndex: 0,
    }}
  />

  <p
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "1.4rem",
      lineHeight: "2.2",
      color: "#ffffff",
      opacity: 0.95,
    }}
  >
    We are an experienced{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #8a2be2, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 600,
      }}
    >
      team of event management specialists
    </span>{" "}
    who know how to plan, promote, and run an event that will achieve your goal.
    <br /><br />
    From{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #8a2be2, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 600,
      }}
    >
      event production to social impact
    </span>
    , fundraising technology services to customer service — we’ve got you
    covered.
    <br /><br />
    With operations in{" "}
    <strong>KSA</strong> and <strong>Kerala</strong>, and accomplished team
    members, we scale quickly to match diverse client needs and budgets.
    <br /><br />
    We execute all projects with precision and purpose.
  </p>
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
