"use client";

import Image from "next/image";
import Counter from "@/lib/conter";
import { useEffect, useState } from "react";

const TOTAL_DURATION = 5000;
const STRIP_DELAY = 100;
const STRIP_ANIM = 700;
const NUM_STRIPS = 10;

const Loading = ({ onDone }) => {
  const [exiting, setExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setExiting(true);

      const exitTotal = (NUM_STRIPS - 1) * STRIP_DELAY + STRIP_ANIM + 100;
      const t2 = setTimeout(() => onDone?.(), exitTotal);
      return () => clearTimeout(t2);
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(t1);
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#fff",
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
    }}>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        zIndex: exiting ? 20 : 2,
        pointerEvents: "none",
        transition: "z-index 0ms",
      }}>
        {Array.from({ length: NUM_STRIPS }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "100%",
              // idle: transparent so card & bg show; exiting: white so strip is visible sliding up
              background: exiting ? "#ffffff" : "transparent",
              borderRight: i < NUM_STRIPS - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
              animation: exiting
                ? `stripUp ${STRIP_ANIM}ms cubic-bezier(0.76,0,0.24,1) ${i * STRIP_DELAY}ms forwards`
                : "none",
            }}
          />
        ))}
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        width: "min(520px, 90vw)",
      }}>

        <div style={{
          position: "absolute",
          top: -30,
          right: -20,
          left: "auto",
          zIndex: 20,
          lineHeight: 1,
          pointerEvents: "none",
          fontFamily: "'Anton','Arial Black',sans-serif",
          fontWeight: 900,
          fontSize: "clamp(90px,15vw,160px)",
          color: "#000",
          lineHeight: 0.9,
        }}>
          <Counter />
        </div>


              <div style={{
                width: "100%",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.10)",
                  animation: "cardIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both",
              }}>          <div
            className="flip-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}
          >
            <div className={`flipper ${isHovered ? 'hovered' : ''}`}>
              <div className="front">
                <Image
                  src="/Cool.jpg"
                  alt="image"
                  fill
                  style={{ objectFit: "cover" }}
                  priority={true}
                />
              </div>
              <div className="back">
                <Image
                  src="/Me.jpeg"
                  alt="me image"
                  fill
                  style={{ objectFit: "cover" }}
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div style={{
            width: "100%",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f172a",
            animation: "titleRise 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both",
          }}>
            <h1 style={{
              margin: 0,
              color: "#fff",
              fontFamily: "'Anton','Arial Black',sans-serif",
              fontSize: "clamp(1.5rem,4vw,2.3rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textAlign: "center",
            }}>
              TIMOSDEV99
            </h1>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes stripUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-105%); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes titleRise {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Hover Flip Animation Styles */
        .flip-container {
          perspective: 1000px; /* establish 3D context */
          cursor: pointer;
        }

        .flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-container .flipper.hovered {
          transform: rotateY(180deg);
        }

        .front, .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden; /* hide back of the element when rotated */
        }

        .back {
          transform: rotateY(180deg);
        }
        `}</style>
    </div>
  );
};

export default Loading;
