"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Africa/Lagos",
        })
      );
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const socials = [
  { label: "Telegram", href: "https://t.me/tmot11x" },
  { label: "Twitter", href: "https://x.com/Timothy9199" },
  { label: "Discord", href: "https://discord.gg/tmfunc" },
  { label: "Github", href: "https://github.com/Timosdev99" },
];

export default function IntroCard() {
  const [mounted, setMounted] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const time = useClock();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Syne+Mono&display=swap');

        .font-syne      { font-family: 'Syne', sans-serif; }
        .font-syne-mono { font-family: 'Syne Mono', monospace; }

               .text-hero { font-size: clamp(72px, 13vw, 180px); }
        .text-tag  { font-size: clamp(16px, 2vw,  22px);  }
        .text-send { font-size: clamp(16px, 1.6vw, 18px); }

                .img-mr-t { top:   clamp(180px, 28vw, 340px); }
        .img-mr-r { right: clamp(80px,  12vw, 180px); }
        .img-mr-w { width: clamp(100px, 12vw, 160px); }
        .img-mr-h { height: clamp(140px, 18vw, 220px); }

                .flip-container { perspective: 1000px; }
        .flipper {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .flip-container.hovered .flipper { transform: rotateY(180deg); }
        .flipper .front,
        .flipper .back  { backface-visibility: hidden; position: absolute; inset: 0; }
        .flipper .back  { transform: rotateY(180deg); }

               .social-link { position: relative; }
        .social-link::before {
          content: "";
          position: absolute;
          bottom: 0; left: 0;
          width: 0%; height: 2px;
          background-color: rgb(59, 130, 246);
          transition: width 0.3s ease-in-out;
        }
        .social-link:hover::before { width: 100%; }
      `}</style>


      <div className="font-syne min-h-screen bg-black text-white relative overflow-hidden">
        <div className="relative z-10">

          <div className="flex flex-col items-center px-6 pt-10 pb-6 md:hidden min-h-screen">


            <h1
              className={`text-5xl font-extrabold text-white leading-[1.05] tracking-[-2px] text-center w-full
                          transition-all duration-700 ease-out
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              I'm Timothy,
            </h1>

            <p
              className={`mt-3 text-base text-white/70 text-center transition-all duration-700 ease-out delay-150
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="text-teal-400 font-semibold">Full Stack and System</span>
              {" "}Engineer
            </p>


            <div
              className={`mt-4 transition-all duration-700 ease-out delay-[250ms]
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <a
                href="/work"
                className="group inline-flex items-center gap-2 text-base font-semibold text-white
                           border-b border-white/30 pb-1.5 hover:border-blue-500 transition-colors"
              >
                Work With Me
                <span className="inline-block -rotate-[30deg] text-white/60 transition-transform group-hover:rotate-0 group-hover:text-white">
                  ↗
                </span>
              </a>
            </div>

            <div
              className={`mt-6 w-40 h-52 overflow-hidden rounded-sm flip-container
                          transition-all duration-700 ease-out delay-300
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                          ${isImageHovered ? "hovered" : ""}`}
              style={{ background: "#b388ff" }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <div className="flipper" style={{ background: "linear-gradient(160deg,#7c3aed44,#b388ff55)" }}>
                <div className="front">
                  <Image src="/background.jpg" alt="image" fill style={{ objectFit: "cover" }} priority />
                </div>
                <div className="back">
                  <Image src="/X.jpg" alt="image-back" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>
            <div
              className={`mt-auto pt-10 w-full flex items-end justify-between gap-4
                          transition-all duration-700 ease-out delay-500
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div>
                <p className="font-syne-mono text-[13px] text-white/50 uppercase tracking-[0.05em]">
                  LAGOS
                </p>
                <p className="font-syne-mono text-[13px] text-white/35 mt-0.5">
                  {time}
                </p>
              </div>

              <div className="border-l border-t border-white/[0.055]">
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group social-link flex items-center justify-between px-4 py-3
                               border-b border-white/[0.055] text-[13px] font-medium text-white/80
                               hover:text-white hover:bg-white/[0.04] transition-all min-w-[130px]"
                  >
                    {label}
                    <span className="inline-block -rotate-[30deg] text-white/40 text-xs transition-transform group-hover:rotate-0 group-hover:text-white ml-2">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div
            className="hidden md:grid relative"
            style={{ gridTemplateColumns: "repeat(8, 1fr)", minHeight: "calc(100vh - 64px)" }}
          >


            <div
              className={`pt-6 self-start transition-all duration-700 ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ gridColumn: "2 / 8", gridRow: 1 }}
            >
              <h1 className="text-hero font-extrabold text-white leading-[0.92] tracking-[-3px]">
                I'm Timothy,
              </h1>
            </div>


            <div
              className={`pt-5 self-start flex gap-32 transition-all duration-700 ease-out delay-150
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ gridColumn: "2 / 6", gridRow: 2 }}
            >
              <p className="text-tag text-white/70">
                <span className="text-teal-400 font-semibold">Full Stack and System</span>
                {" "}Engineer
              </p>
            </div>

            <div
              className={`pt-7 self-start transition-all duration-700 ease-out delay-[250ms]
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ gridColumn: "2 / 4", gridRow: 3 }}
            >
              <a
                href="/work"
                className="group inline-flex items-center gap-2 text-send font-semibold text-white
                           border-b border-white/30 pb-1.5 hover:border-blue-500 transition-colors ease-in-out"
              >
                Work With Me
                <span className="inline-block -rotate-[30deg] text-white/60 transition-transform group-hover:rotate-0 group-hover:text-white">
                  ↗
                </span>
              </a>
            </div>

            <div
              className={`img-mr-w img-mr-h img-mr-t img-mr-r absolute overflow-hidden rounded-sm z-20
                          flip-container transition-all duration-700 ease-out delay-300
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                          ${isImageHovered ? "hovered" : ""}`}
              style={{ background: "#b388ff" }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <div
                className="flipper"
                style={{ background: "linear-gradient(160deg,#7c3aed44,#b388ff55)" }}
              >
                <div className="front">
                  <Image src="/background.jpg" alt="image" fill style={{ objectFit: "cover" }} priority />
                </div>
                <div className="back">
                  <Image src="/X.jpg" alt="image-back" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>


            <div
              className={`absolute bottom-0 right-0 border-l border-t border-white/[0.055] z-20 min-w-40
                          transition-all duration-700 ease-out delay-[350ms]
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group social-link flex items-center justify-between px-4 py-3.5
                             border-b border-white/[0.055] text-[15px] font-medium text-white/80
                             hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {label}
                  <span className="inline-block -rotate-[30deg] text-white/40 text-sm transition-transform group-hover:rotate-0 group-hover:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>


            <div
              className={`absolute bottom-5 left-7 z-20 transition-all duration-700 ease-out delay-500
                          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="font-syne-mono text-[13px] text-white/50 uppercase tracking-[0.05em]">
                LAGOS
              </p>
              <p className="font-syne-mono text-[13px] text-white/35 mt-0.5">
                {time}
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
