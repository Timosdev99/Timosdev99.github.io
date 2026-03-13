"use client";

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

        .text-hero-build { font-size: clamp(22px, 5vw, 60px); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.6s ease forwards 0.05s; }
        .anim-2 { animation: fadeUp 0.6s ease forwards 0.15s; }
        .anim-3 { animation: fadeUp 0.6s ease forwards 0.22s; }
      `}</style>

      <div className="col-grid fixed inset-0 pointer-events-none z-0" />

      <div className="font-syne min-h-screen text-white relative">
        <div className="relative z-10">

          <div className="anim-1 opacity-0 px-4 sm:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10">
            <h1 className="text-hero-build font-extrabold leading-[1.1] tracking-tight">
              I Write <span className="text-cyan-400">Clean Software</span>
            </h1>
            <h1 className="text-hero-build font-extrabold leading-[1.1] tracking-tight mt-1">
              That People Actually <span className="text-cyan-400">Love Using</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[0.055]">

            <div className="anim-2 opacity-0 px-4 sm:px-8 py-8 sm:py-10 bg-cyan-800/60 border-b md:border-b-0 md:border-r border-white/[0.055]">
              <h2 className="text-cyan-400 font-bold text-base sm:text-lg mb-5 sm:mb-7">Services</h2>
              <ul className="space-y-3 sm:space-y-5">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/80 text-[15px] sm:text-[17px]">
                    <span className="text-white/40 text-sm">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="anim-3 opacity-0 px-3 sm:px-4 py-6 sm:py-8">
              <div className="border border-cyan-900/70 hover:shadow-xl hover:shadow-cyan-800 hover:border-cyan-700 rounded-xl p-3 sm:p-4 bg-white/[0.02] transition-all">
                <h2 className="text-cyan-400 font-bold text-base sm:text-lg mb-4 sm:mb-5">My Stack</h2>

                {Object.entries(stack).map(([category, items]) => (
                  <div key={category} className="mb-4 last:mb-0">
                    <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-white/35 mb-2 sm:mb-3 uppercase">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {items.map(({ name, icon }) => (
                        <span
                          key={name}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 rounded-full
                                     border border-white/[0.12] bg-white/[0.04]
                                     text-[11px] sm:text-sm text-white/80
                                     hover:border-white/30 hover:text-white hover:bg-white/[0.07]
                                     transition-all cursor-default"
                        >
                          <i className={`${icon} mr-0.5`}></i>
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
