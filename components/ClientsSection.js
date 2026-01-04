"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function ClientsSection() {
  const clients = [
    "/assets/clients-pic/client1.webp",
    "/assets/clients-pic/client2.webp",
    "/assets/clients-pic/client3.webp",
    "/assets/clients-pic/client4.webp",
    "/assets/clients-pic/client5.webp",
    "/assets/clients-pic/client6.webp",
    "/assets/clients-pic/client7.webp",
    "/assets/clients-pic/client8.webp",
    "/assets/clients-pic/client9.webp",
    "/assets/clients-pic/client-a.webp",
    "/assets/clients-pic/client-b.webp",
    "/assets/clients-pic/client-c.webp",
    "/assets/clients-pic/client-d.webp",
    "/assets/clients-pic/client-e.webp",
    "/assets/clients-pic/client-f.webp",
    "/assets/clients-pic/client-g.webp",
  ];

  return (
    <section
      id="clients"
      style={{
        position: "relative",
        width: "100%",
        padding: "40px 20px",
        marginTop: "-60px",
        backgroundColor: "#060010",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles particleColors={["#ffffff"]} particleCount={150} speed={0.1} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Animated Heading */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto 3.5rem",
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
            Our Clients
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

          <p style={{ fontSize: "1.1rem", opacity: 0.85 }}>
            Trusted by brands and partners worldwide
          </p>
        </div>

        {/* Logos Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
          }}
        >
          {clients.map((logo, index) => (
            <div
              key={index}
              style={{
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0) scale(1)")
              }
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={160}
                height={80}
                loading="lazy"
                style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatHeading {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
