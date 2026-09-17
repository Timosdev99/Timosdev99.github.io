// app/resume/page.jsx
// Resume rendered with Tailwind utility classes, matching the rest of the site
// (black background from globals.css, Montserrat headings, mono accents).

export const metadata = {
  title: "Tim — Resume",
  description: "Systems engineer & founder, Lagos, Nigeria",
};

const experience = [
  {
    org: "ECRAMME",
    role: "Frontend Engineer",
    period: "10/2024 - 10/2025",
    location: "Ondo, Nigeria",
    summary:
      "A platform that provides access to a detailed database of past extreme events, organized along several risk indicators, and a unique repository of coastal hazard information to support end-users for both emergency and long term risk planning actions.",
    points: [
      "Developed an interactive map visualization system using Next.js and Mapbox GL to render geospatial data(GeoTIFF) efficiently.",
      "Optimized performance by implementing efficient rendering techniques, reducing load times, and improving map responsiveness.",
      "Engineered a custom calculation system to process and transform geospatial data, ensuring accurate representation on the map.",
      "Collaborated with backend teams and Reasechers to integrate data pipelines, ensuring seamless and accurate data flow"
    ],
    stack: ["Typescript", "Nextjs", "Mapbox GL", "Geospatial Technology",],
  },
  {
    org: "Federal Ministry of Art, Culture, Tourism & the Creative Economy",
    role: "Fullstack Developer — FMACTCE Payment Voucher System",
    period: "In production",
    location: "Nigeria (remote)",
    summary:
      "A Next.js application handling government payment vouchers, used by over 1k government staff internally and hosted on Brimble.",
    points: [
      "Implemented voucher workflows for PV Treasury F1 and Capital Expenditure TF 27, including automated VAT extraction, withholding tax, stamp duty, and consultancy fee calculations.",
      "Provisioned production infrastructure, configuring Cloudflare DNS, Resend transactional email, and email routing for the production domain.",
      "Designed and built an intuitive interface that streamlined voucher processing for 1k+ government staff.",
      "Managed and maintained the production service, ensuring 99.9% uptime for daily operations."
    ],
    stack: ["Typescript", "Next.js", "MongoDB", "Brimble", "Custom Auth"],
  },
  {
    org: "Ghost Market",
    role: "Fullstack Engineer",
    location: "remote",
    period: "contract",
    summary:
      "A high-traffic marketplace platform serving 5k+ users, requiring scalable order processing, real-time messaging, and a modern administrative backend.",
    points: [
      "Designed and maintained a high-performance API, optimized database queries, and managed VPS for deployment and scalability.",
      "Built a WebSocket-based chat system for instant messaging and developed an efficient order-processing logic to handle high transaction volumes and used by 2k+ people.",
      "Redesigned the platform’s UI for a sleek, intuitive experience and created an interactive admin dashboard for order confirmations, analytics, and user management.",
      "Optimized the platform to support thousands of concurrent users while ensuring fast load times and minimal downtime."

    ],
    stack: ["Typescript", "Docker", "Next.js", "DevOps"]
  }
];

const projects = [
  {
    name: "Cipher",
    description:
      "Solana on-chain intelligence and trading infrastructure built around wallet intelligence and confluence scoring. Rust workspace with Neo4j Aura storage, Helius webhooks, and a Telegram bot interface.",
  },
  {
    name: "DeployKitty",
    description:
      "Setup and Deploy everything you need for a fast build from your terminal in just one click",
  },
  {
    name: "Blueroom",
    description: "Real-time music rooms where users can rate every track, match taste,earn streaks and Listen to music with the people you love with over 50+ active users and 300+ music played accross 40+ rooms",

  },
  {
    name: "Metis",
    description:
      "AI context manager that lets you switch between coding CLIs without losing context.",
  },
];

const openSource = [
  {
    org: "Paradigm",
    name: "Reth",
    points: [
      "Contributed to Reth, Paradigm's Rust-based Ethereum execution client.",
      "Introduced a newPayloadPhaseMetrics struct and instrumented on_new_payload to record granular timing for each phase of newPayload processing, from pre-warming through post-processing.",
      "Instrumented validate_block_with_state to capture durations for pre-warming initialization, block execution, post-execution validation, sparse-tree, and state-root computation, enabling precise execution profiling.",
    ],
    stack: ["Rust", "Ethereum", "Blockchain", "Distributed Systems"],
  },
  {
    org: "ReamsLab",
    name: "Lean client",
    points: [
      "Contributed to a lightweight blockchain node client focused on minimal resource usage.",
      "Eliminated duplicated RPC server startup between ream-rpc-beacon and ream-rpc-lean by extracting the shared actix-web middleware and socket-binding logic into a generic start_rpc_server function in ream-rpc-common, used by both services.",
    ],
    stack: ["Rust", "Blockchain", "Ethereum", "Lean-Client"],
  },
  {
    org: "crabtalk",
    name: "Crabtalk",
    points: [
      "Refactored the agent runtime to hoist immutable conversation identity out of the long-held Mutex<Conversation> into the outer runtime map entry, eliminating routing head-of-line blocking.",
      "Enabled lock-free routing lookups via O(n) string comparisons, decoupling identity resolution from the slowest in-flight streaming turn and preventing new requests from stalling.",
      "Enforced the RFC 0135 1:1 conversation-per-identity invariant at the runtime architecture level.",
    ],
    stack: ["Rust", "AI", "Agent Runtime", "Agent framework"],
  },
];

const skills = [
  "Rust & systems programming",
  "Next.js / JavaScript / Typescript",
  "Graph & ontology systems",
  "Blockchain infra (EVM, ZK rollups, Solana)",
  "Kafka, Docker",
  "MongoDB, Postgresql, MySql",
];

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-[760px] px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-b border-[#1e1e1e] pb-6">
        <div>
          <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tim
          </h1>
          <p className="mt-2 font-sans text-[0.98rem] text-gray-400">
            Systems Engineer &amp; Founder
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 font-mono text-xs text-gray-500 sm:items-end">
          <span>Lagos, Nigeria</span>
          <span>github.com/Timosdev99</span>
        </div>
      </header>

      <p className="mb-16 max-w-[62ch] leading-relaxed text-gray-300">
        I build systems from first principles — currently working on ONTO, which is a stealth under my studio F***Lab.
        I care about proving one thing end to end before widening scope, and
        about showing the real shape of the work. in short i just really love building cool stuff to solve people problems
      </p>

      <section className="mb-16">
        <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
          Experience
        </h2>
        <ol className="ml-3 border-l border-[#1e1e1e] pl-8">
          {experience.map((job) => (
            <li key={job.org} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-8 h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_4px_#000]"
              />
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-sans text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-gray-500">
                  {job.period}
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider">
                <span className="text-green-400">{job.org}</span>
                <span className="text-gray-500">{job.location}</span>
              </div>
              <p className="mb-4 leading-relaxed text-gray-300">{job.summary}</p>
              <ul className="mb-4 list-disc space-y-1.5 pl-5 text-gray-400 marker:text-green-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[#2a2a2a] rounded-full px-3 py-1 font-mono text-xs text-gray-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
          Open source contributions
        </h2>
        <ol className="ml-3 border-l border-[#1e1e1e] pl-8">
          {openSource.map((project) => (
            <li key={project.org} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-8 h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_4px_#000]"
              />
              <h3 className="mb-1 font-sans text-lg font-semibold text-white">
                {project.name}
              </h3>
              <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider">
                <span className="text-green-400">{project.org}</span>
              </div>
              <ul className="mb-4 list-disc space-y-1.5 pl-5 text-gray-400 marker:text-green-400">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[#2a2a2a] rounded-full px-3 py-1 font-mono text-xs text-gray-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
          Other projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-md border border-[#1e1e1e] p-4 transition-colors hover:border-green-400/40"
            >
              <h3 className="mb-1 font-sans text-base font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
            Skills
          </h2>
          <ul className="flex flex-col gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border-l-2 border-green-400 pl-3.5 text-[0.92rem] text-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
            Education
          </h2>
          <h3 className="mb-1 font-sans text-base font-semibold text-white">
            B.Sc, Physics Energy
          </h3>
          <p className="text-sm text-gray-400">
            Federal University of Technology, Akure (FUTA) — in progress
          </p>
        </section>
      </div>
    </main>
  );
}
