"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      setTime(new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: true, timeZone: "Africa/Lagos",
      }));
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

  const handleImageMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Syne+Mono&display=swap');
        .font-syne      { font-family: 'Syne', sans-serif; }
        .font-syne-mono { font-family: 'Syne Mono', monospace; }

              
              .text-hero  { font-size: clamp(72px, 13vw, 180px); }
        .text-tag   { font-size: clamp(16px, 2vw, 22px); }
        .text-send  { font-size: clamp(16px, 1.6vw, 18px); }

               .img-tr-w { width:  clamp(120px, 15vw, 200px); }
        .img-tr-h { height: clamp(160px, 22vw, 280px); }
        .img-mr-t { top:    clamp(180px, 28vw, 340px); }
        .img-mr-r { right:  clamp(80px,  12vw, 180px); }
        .img-mr-w { width:  clamp(100px, 12vw, 160px); }
        .img-mr-h { height: clamp(140px, 18vw, 220px); }
        .img-bl-b { bottom: clamp(20px,  4vw,  60px);  }
        .img-bl-l { left:   clamp(200px, 25vw, 400px); }
        .img-bl-s { width:  clamp(100px, 12vw, 152px); height: clamp(100px, 12vw, 152px); }

      
        .arrow-link:hover .arrow-icon { transform: rotate(0deg); color: white; }

               .fade-up   { opacity:0; transform:translateY(16px); transition: opacity .6s ease, transform .6s ease; }
        .fade-up.in { opacity:1; transform:translateY(0); }

               .social-link {
          position: relative; /* Ensure pseudo-element is positioned relative to the link */
        }

        .social-link::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: rgb(59, 130, 246); /* Tailwind's blue-500 */
          transition: width 0.3s ease-in-out;
        }

        .social-link:hover::before {
          width: 100%;
        }

              .image-flipper-container {
          perspective: 1000px;
        }

        .image-flipper-container .flipper {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }

        .image-flipper-container.hovered .flipper {
          transform: rotateY(180deg);
        }
        
        .image-flipper-container .flipper .front,
        .image-flipper-container .flipper .back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-flipper-container .flipper .back {
          transform: rotateY(180deg);
        }

      `}</style>

      <div className="col-grid fixed inset-0 pointer-events-none " />

      <div className="font-syne min-h-screen text-white relative overflow-hidden">
        <div className="relative z-10">



          <div
            className="grid relative"
            style={{
              gridTemplateColumns: "repeat(8, 1fr)",
              minHeight: "calc(100vh - 64px)",
            }}
          >

            <div
              className="pt-6 self-start"
              style={{ gridColumn: "2 / 8", gridRow: 1 }}
            >
              <h1
                className={`font-syne font-extrabold text-white text-hero  leading-[0.92] tracking-[-3px] fade-up ${mounted ? "in" : ""}`}
              >
                I'm Timothy,
              </h1>
            </div>

            <div
              className="pt-5 self-start flex gap-32"
              style={{ gridColumn: "2 / 6", gridRow: 2, transitionDelay: "150ms" }}
            >
              <p
                className={`text-tag text-white/70 fade-up ${mounted ? "in" : ""}`}
                style={{ transitionDelay: "150ms" }}
              >
                <span className="text-teal-400 font-semibold">Full Stack and System</span>
                {" "}Engineer
              </p>


            </div>

            <div
              className={`pt-7 self-start fade-up ${mounted ? "in" : ""}`}
              style={{ gridColumn: "2 / 4", gridRow: 3, transitionDelay: "250ms" }}
            >
              <a
                href="/work"
                className="arrow-link inline-flex items-center gap-2 text-send font-semibold text-white border-b border-white/30 pb-1.5 hover:border-blue-500 transition-colors ease-in-out"
              >
                Work With Me
                <span className="arrow-icon inline-block -rotate-[30deg] transition-transform text-white/60">↗</span>
              </a>
            </div>



            <div
              className={`img-mr-w img-mr-h img-mr-t img-mr-r absolute overflow-hidden rounded-sm z-20 fade-up ${mounted ? "in" : ""} image-flipper-container ${isImageHovered ? "hovered" : ""}`}
              style={{ transitionDelay: "300ms", background: "#b388ff" }}
              onMouseEnter={handleImageMouseEnter}
              onMouseLeave={handleImageMouseLeave}
            >
              <div className="w-full h-full flipper"
                style={{ background: "linear-gradient(160deg,#7c3aed44,#b388ff55)" }}>
                <div className="front w-full h-full flex absolute justify-center mr-40">
                  <Image
                    src="/background.jpg"
                    alt="image"
                    fill
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                </div>
                <div className="back w-full h-full flex absolute justify-center mr-40">
                  <Image
                    src="/X.jpg"
                    alt="image-back"
                    fill
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                </div>
              </div>
            </div>




            <div
              className={`absolute bottom-0 right-0 border-l border-t border-white/[0.055] z-20 fade-up ${mounted ? "in" : ""}`}
              style={{ transitionDelay: "350ms", minWidth: 160 }}
            >
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="arrow-link social-link relative flex border-b border-white/[0.055] items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {label}
                  <span className="arrow-icon inline-block -rotate-[30deg] text-white/40 text-sm transition-all">↗</span>
                </a>
              ))}
            </div>

            <div
              className={`absolute bottom-5 left-7 z-20 fade-up ${mounted ? "in" : ""}`}
              style={{ transitionDelay: "500ms" }}
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
