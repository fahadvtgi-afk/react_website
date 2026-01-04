'use client';

import dynamic from "next/dynamic";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import('../../components/Particles'), { ssr: false });

export default function WorksPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "40px 20px",
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

      {/* Foreground content placeholder */}
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
        <h1 style={{ fontSize: "3rem", marginTop: "100px" }}>Our Works</h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
          Check back soon for our projects
        </p>
      </div>
    </div>
  );
}
