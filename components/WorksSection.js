'use client';

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Particles = dynamic(() => import('./Particles'), { ssr: false });

export default function WorkSection() {
  const rowRef = useRef(null);

  const items = [
    "port1.webp","port2.webp","port3.webp","port4.webp","port5.webp",
    "port6.webp","port7.webp","port8.webp","port9.webp",
    "port-ab.webp","port-ad.webp","port-b.webp","port-c.webp",
    "port-d.webp","port-i.webp","port-k.webp","port-m.webp","port-n.webp",
    "port-s.webp","port-t.webp","port-w.webp","port-x.webp","port-z.webp",
  ];

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const width = row.scrollWidth / 2;

    gsap.set(row, { x: 0 });

    gsap.to(row, {
      x: -width,
      duration: 30,
      ease: "linear",
      repeat: -1,
      force3D: true,
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "80px 0",
        backgroundColor: "#060010",
        overflow: "hidden",
      }}
    >
      {/* Background Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={150}
          speed={0.1}
          particleBaseSize={100}
        />
      </div>

      {/* Styled Heading  */}
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
          Our Works
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
            color: "#fff",
          }}
        >
          Check out our amazing projects
        </p>
      </div>

      {/* ONE continuous sliding row */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <div
          ref={rowRef}
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {[...items, ...items].map((img, i) => (
            <div
              key={i}
              style={{
                width: "200px",
                height: "200px",
                marginRight: "16px",
                backgroundImage: `url(/assets/img/${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
                flexShrink: 0,
                contain: "layout paint size",
                willChange: "transform",
              }}
            />
          ))}
        </div>
      </div>

      {/* Animations + Responsive */}
      <style jsx>{`
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

        @media (max-width: 1200px) {
          div[style*="background-image"] {
            width: 180px !important;
            height: 180px !important;
          }
        }
        @media (max-width: 900px) {
          div[style*="background-image"] {
            width: 150px !important;
            height: 150px !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="background-image"] {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </div>
  );
}
