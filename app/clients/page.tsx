'use client';

import dynamic from "next/dynamic";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import('../../components/Particles'), { ssr: false });

export default function ClientsPage() {
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
          className="my-custom-class"
        />
      </div>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          color: "white",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginTop: "100px" }}>
          Our Clients
        </h1>

        <p style={{ marginTop: "1rem", opacity: 0.8 }}>
          Brands and businesses who trust VLIVE VISION for powerful events.
        </p>
      </div>
    </div>
  );
}
