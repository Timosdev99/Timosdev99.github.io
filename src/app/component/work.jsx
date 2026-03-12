"use client";

import { useEffect, useState } from "react";
import LetTalkSection from "./LetTalkSection";

const paragraphs = [
  "Happy to talk about full-time, contract, infrastructure & maintainance opportunities.",
  "Although I specialize in Typescript & Rust, I have ~4 years of experience building across web & Dapps, Blockchain infra, Smart contract, Dev tooling, APIs and Cloud services. While I write Typescript and Rust, I have other experience using other languages to build production ready web3 systems such as Solidity and others.",
  "I also can help in building and scaling your solution/ideas and other related infra/web3 tasks.",
  "I am mostly interested in building out blockchain infra, Distributed systems, APIs, PaaS, SaaS, system engineering and fintechs ( + plus Ai automation  ).",
];

const extras = [
  { emoji: "👷", text: "I can join your team as a Fulltime Engineer ( employee )" },
  { emoji: "🤝", text: "I can also work as an independent contractor / freelancer" },
  { emoji: "🔍", text: "I can help improving code and architecture on heavily Ai supported codebase by scaling and refactoring Ai slop code" },
  { emoji: "🛠️", text: "I can help build out your infrastructure and Deployment pipeline" },
];

export default function WorkWithMe() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital@1&display=swap');
              .hero-block {
          background:#39FF14;
          margin: 32px 0 0;
          padding: 28px 80px 20px;
        }
        .hero-display {
          font-family:'Anton','Arial Black',sans-serif;
          font-size:clamp(58px,9.2vw,106px);
          color:#000; text-transform:uppercase;
          letter-spacing:-1px; line-height:0.9;
          white-space:nowrap;
        }
        .hero-script {
          font-family:'Playfair Display',Georgia,serif;
          font-style:italic;
          font-size:clamp(66px,10.5vw,118px);
          color:#000; line-height:0.9;
        }

              .grid-top { border-top:1px solid #1e1e1e; margin-top:40px; }

        .wwm-cell {
          padding: 24px 28px 24px 80px;
          max-width: 780px;
        }

        .body-para {
          font-size:17px; line-height:1.78; color:#d4d4d4;
          opacity:0; transform:translateY(12px);
          transition: opacity .55s ease, transform .55s ease;
        }
        .body-para.in { opacity:1; transform:translateY(0); }

        .extra-row {
          display:flex; align-items:flex-start; gap:10px;
          font-size:17px; line-height:1.7; color:#d4d4d4;
          opacity:0; transform:translateY(12px);
          transition: opacity .55s ease, transform .55s ease;
        }
        .extra-row.in { opacity:1; transform:translateY(0); }
        
        .fade-up { opacity:0; transform:translateY(18px); transition:opacity .65s ease,transform .65s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }

        @media (max-width:700px) {
          .hero-block   { padding:20px 16px 16px; }
          .hero-display { white-space:normal; font-size:clamp(44px,12vw,80px); }
          .hero-script  { font-size:clamp(50px,13vw,90px); }
          .wwm-cell     { padding:20px 16px; }
        }
      `}</style>

      <div className="page">


        <div
          className="hero-block"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity .6s ease, transform .6s ease",
          }}
        >
          <div className="hero-display">WORK WITH</div>
          <div><span className="hero-script">me</span></div>
        </div>

        <div className="grid-top">


          {paragraphs.map((text, i) => (
            <div key={i} className="g-row">
              <div className="wwm-cell">
                <p className={`body-para ${mounted ? "in" : ""}`}
                  style={{ transitionDelay: `${80 + i * 85}ms` }}>
                  {text}
                </p>
              </div>
            </div>
          ))}

          {extras.map((item, i) => (
            <div key={i} className="g-row">
              <div className="wwm-cell">
                <div className={`extra-row ${mounted ? "in" : ""}`}
                  style={{ transitionDelay: `${80 + (paragraphs.length + i) * 85}ms` }}>
                  <span style={{ fontSize: 19, flexShrink: 0, marginTop: 2 }}>{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <LetTalkSection />
      </div>
    </>
  );
}
