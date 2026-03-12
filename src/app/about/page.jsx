"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LEFT_STATES = [
  {
    bg: "#39FF14",
    textColor: "#000",
    proverb: null,
  },
  {
    bg: "#0a0a0a",
    textColor: "#39FF14",
    proverb: "\I can do all things through Christ who stregnthens me..\"\n— Phil 4:13",
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [leftHovered, setLeftHovered] = useState(false);

  useEffect(() => setMounted(true), []);

  const left = leftHovered ? LEFT_STATES[1] : LEFT_STATES[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital@1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about-page {
          background: #000;
          min-height: 100vh;
          font-family: sans-serif;
          overflow-x: hidden;
        }

               .split {
          display: grid;
          grid-template-columns: 49% 51%;
          height: 100vh;
        }

               .left-panel {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px 48px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateX(-20px);
          transition:
            opacity .7s ease,
            transform .7s ease,
            background-color .55s cubic-bezier(0.23,1,0.32,1);
        }
        .left-panel.in { opacity:1; transform:translateX(0); }

        .name-display {
          font-family: 'Anton', 'Arial Black', sans-serif;
          font-size: clamp(60px, 9vw, 120px);
          line-height: 0.88;
          text-transform: uppercase;
          letter-spacing: -1px;
          transition: color .45s ease;
          position: relative;
          z-index: 1;
        }

               .proverb-wrap {
          position: absolute;
          top: 50%;
          left: 40px; right: 40px;
          transform: translateY(-50%);
          z-index: 2;
          opacity: 0;
          transform: translateY(calc(-50% + 12px));
          transition: opacity .45s ease .1s, transform .45s ease .1s;
          pointer-events: none;
        }
        .proverb-wrap.show {
          opacity: 1;
          transform: translateY(-50%);
        }
        .proverb-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(22px, 3vw, 38px);
          line-height: 1.35;
          white-space: pre-line;
          color: #39FF14;
        }
        .proverb-attr {
          display: block;
          margin-top: 12px;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: normal;
          font-size: clamp(13px, 1.4vw, 16px);
          color: rgba(57,255,20,0.55);
          letter-spacing: 0.04em;
        }

              .name-display.hidden { opacity: 0; transition: opacity .25s ease; }
        .name-display.visible { opacity: 1; transition: opacity .45s ease .15s; }

               .right-panel {
          position: relative;
          overflow: hidden;
          perspective: 1200px;
          opacity: 0;
          transition: opacity .7s ease .1s;
        }
        .right-panel.in { opacity: 1; }

        .flip-card {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .right-panel:hover .flip-card { transform: rotateY(-180deg); }

        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back { transform: rotateY(180deg); }

        .photo-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center;
          justify-content: center; font-size: 80px;
        }

              .sticky-note {
          position: absolute;
          bottom: 14px; right: 32px;
          background: #fff; color: #000;
          font-size: 16px; font-weight: 600;
          font-family: 'Helvetica Neue', sans-serif;
          padding: 10px 14px;
          line-height: 1.3;
          transform: rotate(-40deg);
          box-shadow: 2px 3px 12px rgba(0,0,0,0.2);
          z-index: 100;
          pointer-events: none;
          opacity: 0;
          transition: opacity .5s ease .5s;
        }
        .sticky-note.in { opacity: 1; }

              .bio-section {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          padding: 80px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .65s ease, transform .65s ease;
        }
        .bio-section.in { opacity:1; transform:translateY(0); }

        .bio-label {
          font-family: 'Anton', 'Arial Black', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          color: #fff;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          line-height: 1;
          padding-top: 4px;
        }

        .bio-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bio-para {
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.78;
          color: rgba(255,255,255,0.7);
          font-family: Georgia, 'Times New Roman', serif;
        }

        @media (max-width: 700px) {
          .split { grid-template-columns: 1fr; grid-template-rows: 45vh 55vh; }
          .bio-section { grid-template-columns: 1fr; gap: 24px; padding: 48px 24px; }
        }
      `}</style>

      <div className="about-page">


        <div className="split">

          <div
            className={`left-panel ${mounted ? "in" : ""}`}
            style={{ backgroundColor: left.bg }}
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => setLeftHovered(false)}
          >
            <div className={`proverb-wrap ${leftHovered ? "show" : ""}`}>
              <span className="proverb-text">
                "I can do all things through Christ who{"\n"}stregnthens me."
                <span className="proverb-attr">— phil 4:13</span>
              </span>
            </div>

            <div
              className={`name-display ${leftHovered ? "hidden" : "visible"}`}
              style={{ color: left.textColor }}
            >
              TIMOTHY
            </div>
          </div>

          <div className={`right-panel ${mounted ? "in" : ""}`}>
            <div className="flip-card">

              <div className="flip-face">
                <div className="photo-placeholder" style={{ background: "#e8e8e8" }}>🧑🏿</div>
                <Image src="/X.jpg" fill style={{ objectFit: "cover", objectPosition: "center top" }} alt="Mark" />


              </div>

              <div className="flip-face flip-back">
                <div className="photo-placeholder" style={{ background: "#d0f0ff" }}>😄</div>

                <Image src="/Me.jpeg" fill style={{ objectFit: "cover" }} alt="Me" />

              </div>

            </div>

            <div className={`sticky-note ${mounted ? "in" : ""}`}>
              Obsessed<br />Not an Agent
            </div>
          </div>

        </div>

        <div
          className={`bio-section ${mounted ? "in" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bio-label">ME</div>
          <div className="bio-body">
            <p className="bio-para">
              I do write efficient code for profit and most time fun. I started writing code about ~5 years ago but i was familiar with computers at a very early age and had little ideas about programming i was so interested in hacking after watching the matrics .
            </p>
            <p className="bio-para">
              I do work on fullstack application and blockchain infra most times but a few other things I get very curious about at this time includes Compilers, developer Distributed systems and some Hardware stuffs.
            </p>
          </div>
        </div>

        <div
          className={`bio-section ${mounted ? "in" : ""}`}
          style={{ transitionDelay: "320ms" }}
        >
          <div className="bio-label">WORK</div>
          <div className="bio-body">
            <p className="bio-para">
              When im less busy these days, I am either scouting through github to find interesting project i can contribute to or working on this little idea of mine that might turn to something big (been working on this for about 4 months).
            </p>
            <p className="bio-para">
              Most recently, I served as a Full Stack Engineer for an e-commerce marketplace (2024 – 2025) where I architected the deployment infrastructure from scratch, scaling a VPS environment with Nginx, Redis, and optimized databases to support thousands of concurrent users. I also engineered the platform’s WebSocket-based messaging system and a high-volume order processing dashboard. Prior to that, I worked at a climate research organization where I focused on geospatial engineering, building custom calculation engines and high-performance rendering systems to process GeoTIFF data for real-time map visualizations
            </p>
          </div>
        </div>


        <div
          className={`bio-section ${mounted ? "in" : ""}`}
          style={{ transitionDelay: "320ms" }}
        >
          <div className="bio-label">OSS</div>
          <div className="bio-body">
            <p className="bio-para">
              i love contributing to OSS. contributed to several notable project like Paradigm Reth and ReamsLab lean client
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
