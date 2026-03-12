"use client";

import { useEffect, useState } from "react";

const services = [
  "SaaS Development",
  "Enterprise Solutions",
  "Full-Stack Applications",
  "Decentralized Applications",
  "Infrastructure",
  "Problem Solving",
];

const stack = {
  FRONTEND: [
    { name: "Css", icon: "devicon-css3-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "Express js", icon: "devicon-express-original" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next js", icon: "devicon-nextjs-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "Vercel", icon: "devicon-vercel-original colored" },
  ],
  BACKEND: [
    { name: "Node js", icon: "devicon-nodejs-plain colored" },
    { name: "C lang", icon: "devicon-c-plain-wordmark" },
    { name: "Zig", icon: "devicon-zig-original colored" },
    { name: "Rust", icon: "devicon-rust-original" },
    { name: "Mongo DB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-original" },
    { name: "Aws", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "</> Restful API", icon: "devicon-restfulapi-original" },
  ],
  TOOLS: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Github", icon: "devicon-github-original colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "Socketio", icon: "devicon-socketio-original colored" },
    { name: "Vscode", icon: "devicon-vscode-plain colored" },
    { name: "vim", icon: "devicon-vim-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "oAuth", icon: "devicon-oauth-plain colored" },
    { name: "GithubAction", icon: "devicon-githubactions-plain" },
  ],
  WEB3: [
    { name: "Rust", icon: "devicon-rust-original" },
    { name: "Solidity", icon: "devicon-solidity-plain" },
    { name: "Web3.js", icon: "devicon-web3js-plain colored" },
  ],
};

export default function Skill() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }

      .col-grid {
        background-image: repeating-linear-gradient(
          90deg,
          transparent,
          transparent calc(12.5% - 1px),
                                                    rgba(255,255,255,0.055) calc(12.5% - 1px),
                                                    rgba(255,255,255,0.055) 12.5%
        );
      }

      .text-hero-build { font-size: clamp(30px, 3vw, 60px); }

      .fade-up    { opacity:0; transform:translateY(16px); transition: opacity .6s ease, transform .6s ease; }
      .fade-up.in { opacity:1; transform:translateY(0); }

     
      @media (max-width: 640px) {
        .text-hero-build { font-size: clamp(22px, 6.5vw, 34px); }

        .services-panel {
          border-right: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.055) !important;
        }

        .stack-panel { padding: 20px 16px !important; }

        .stack-pill { font-size: 12px !important; padding: 4px 8px !important; }
      }
      `}</style>

      <div className="col-grid fixed inset-0 pointer-events-none z-0" />

      <div className="font-syne min-h-screen text-white relative">
        <div className="relative z-10">

          <div
            className={`px-4 sm:px-8 pt-12 pb-10 fade-up ${mounted ? "in" : ""}`}
            style={{ transitionDelay: "50ms" }}
          >
            <h1 className="text-hero-build font-extrabold leading-[1.1] tracking-tight">
              I Write <span className="text-cyan-400">Clean Software</span>
            </h1>
            <h1 className="text-hero-build font-extrabold leading-[1.1] tracking-tight mt-1">
              That People Actually <span className="text-cyan-400">Love Using</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[0.055]">

            <div
              className={`services-panel px-4 sm:px-8 py-10 bg-cyan-800/60 md:border-r border-white/[0.055] fade-up ${mounted ? "in" : ""}`}
              style={{ transitionDelay: "150ms" }}
            >
              <h2 className="text-cyan-400 font-bold text-lg mb-7">Services</h2>
              <ul className="space-y-5">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/80 text-[17px]">
                    <span className="text-white/40 text-sm">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`stack-panel px-2 sm:px-4 py-8 fade-up ${mounted ? "in" : ""}`}
              style={{ transitionDelay: "220ms" }}
            >
              <div className="border border-cyan-900/70 hover:shadow-xl hover:shadow-cyan-800 hover:border-6 rounded-xl p-4 bg-white/[0.02]">
                <h2 className="text-cyan-400 font-bold text-lg mb-5">Tech Stack</h2>

                {Object.entries(stack).map(([category, items]) => (
                  <div key={category} className="mb-5 last:mb-0">
                    <p className="text-[11px] font-semibold tracking-widest text-white/35 mb-3 uppercase">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(({ name, icon }) => (
                        <span
                          key={name}
                          className="stack-pill inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.12] bg-white/[0.04] text-sm text-white/80 hover:border-white/30 hover:text-white hover:bg-white/[0.07] transition-all cursor-default"
                        >
                          <i className={`${icon} mr-1`}></i>
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="border-t border-white/[0.055]" />

        </div>
      </div>
    </>
  );
}
