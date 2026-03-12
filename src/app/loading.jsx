"use client";

import Image from "next/image";
import Counter from "@/lib/conter";
import { useEffect, useState } from "react";

const TOTAL_DURATION = 6000;
const STRIP_DELAY = 100;
const STRIP_ANIM = 700;
const NUM_STRIPS = 10;

const Loading = ({ onDone }) => {
  const [exiting, setExiting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setExiting(true);
      const exitStrips = (NUM_STRIPS - 1) * STRIP_DELAY + STRIP_ANIM + 100;
      const blackStrips = (NUM_STRIPS - 1) * STRIP_DELAY + STRIP_ANIM + 100;
      const t2 = setTimeout(() => onDone?.(), exitStrips + blackStrips);
      return () => clearTimeout(t2);
    }, TOTAL_DURATION);
    return () => clearTimeout(t1);
  }, []);

  const exitTotalStrips = (NUM_STRIPS - 1) * STRIP_DELAY + STRIP_ANIM + 100;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#fff",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

      {/* ── White exit strips ── */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        zIndex: exiting ? 20 : 2,
        pointerEvents: "none",
      }}>
        {Array.from({ length: NUM_STRIPS }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: "100%",
            background: exiting ? "#ffffff" : "transparent",
            borderRight: i < NUM_STRIPS - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
            animation: exiting
              ? `stripUp ${STRIP_ANIM}ms cubic-bezier(0.76,0,0.24,1) ${i * STRIP_DELAY}ms forwards`
              : "none",
          }} />
        ))}
      </div>

      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        zIndex: 16,
        pointerEvents: "none",
      }}>
        {Array.from({ length: NUM_STRIPS }).map((_, i) => (
          <div key={`b-${i}`} style={{
            flex: 1, height: "100%",
            background: "#000",
            transform: "translateY(100%)",
            animation: exiting
              ? `stripUp ${STRIP_ANIM}ms cubic-bezier(0.76,0,0.24,1) ${exitTotalStrips + i * STRIP_DELAY}ms forwards`
              : "none",
          }} />
        ))}
      </div>


      <div
        className="card-wrap"
        style={{
          opacity: exiting ? 0 : 1,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <div className="counter-pos">
          <Counter />
        </div>

        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.10)",
            animation: "cardIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both",
          }}
        >
          <div
            className="flip-container"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(f => !f)}
            style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}
          >
            <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
              <div className="face front">
                <Image src="/Cool.jpg" alt="image" fill style={{ objectFit: "cover" }} priority />
              </div>
              <div className="face back">
                <Image src="/Me.jpeg" alt="me" fill style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>

          <div style={{
            width: "100%", height: 72,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#0f172a",
            animation: "titleRise 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both",
          }}>
            <h1 style={{
              margin: 0, color: "#fff",
              fontFamily: "'Anton','Arial Black',sans-serif",
              fontSize: "clamp(1.5rem,4vw,2.3rem)",
              fontWeight: 700, letterSpacing: "0.08em", textAlign: "center",
            }}>
              TIMOSDEV99
            </h1>
          </div>
        </div>

        <div className="caption-wrap">
          <p className="loading-caption">
            "I write software like shakespeare"
            <span className="loading-author">— Timosdev</span>
          </p>
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

           .card-wrap {
        position: relative;
        z-index: 10;
        width: min(520px, 88vw);        
display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
              overflow: visible;
      }

      .card {
        width: 100%;
        overflow: hidden;
    
      }

          .counter-pos {
        position: absolute;
              top:   clamp(-58px, -8vw, -30px);
        right: clamp(-58px, -8vw, -30px);
        z-index: 20;
        pointer-events: none;
        line-height: 0.9;
      }

           .counter-pos > div,
      .counter-pos h1 {
        font-family: 'Anton','Arial Black',sans-serif !important;
        font-weight: 900 !important;
        /* large screen: 160px, mobile: scales with card width ~22vw of 88vw card */
        font-size: clamp(72px, 20vw, 160px) !important;
        color: #000 !important;
        line-height: 0.9 !important;
        margin: 0 !important;
      }

          .flip-container {
        perspective: 1000px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
      .flipper {
        position: relative; width: 100%; height: 100%;
        transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
        transform-style: preserve-3d;
      }
      .flipper.flipped { transform: rotateY(180deg); }
      .face {
        position: absolute; width: 100%; height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      .back { transform: rotateY(180deg); }

          .caption-wrap {
        text-align: center;
        padding: 0 8px;
        width: 100%;
      }
      .loading-caption {
        font-family: 'Playfair Display', Georgia, serif;
        font-style: italic;
        font-size: clamp(14px, 3.5vw, 24px);
        line-height: 1.45;
        color: black;
      }
      .loading-author {
        display: block;
        margin-top: 6px;
        font-style: normal;
        font-size: clamp(10px, 2.5vw, 13px);
        color: black;
        letter-spacing: 0.05em;
      }

     
      @media (max-height: 580px) {
        .card-wrap { gap: 12px; }
      
        .counter-pos > div,
        .counter-pos h1 { font-size: clamp(48px, 12vw, 80px) !important; }
      }
      `}</style>
    </div>
  );
};

export default Loading;
