"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Minimum display time (branding)
    const minTimer = setTimeout(() => {
      setVisible(false);
    }, 2200); // 👈 adjust if needed (2–3s ideal)

    return () => clearTimeout(minTimer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="preloader">
        <div className="loader">
          <div className="ring" />
          <span>Loading Experience</span>
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at center, #080014, #000);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          animation: fadeOut 0.6s ease forwards;
          animation-delay: 2s;
        }

        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .ring {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.15);
          border-top-color: #8a2be2;
          animation: spin 0.9s linear infinite;
        }

        span {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}
