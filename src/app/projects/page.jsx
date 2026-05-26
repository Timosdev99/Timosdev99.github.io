'use client'
import { useState } from 'react';
import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturedProjects from '../component/visual';

const projects = [
  {
    name: "Baronde",
    stack: ["TypeScript, Jest, E-commerce, Backend, Payment-integration"],
    link: "https://github.com/Timosdev99/Baronde",
    description: "Backend system of an E-commerce website."
  },
  {
    name: "RegEx patttern recognition engine",
    stack: ["Zig, low-level, pattern"],
    link: "https://github.com/Timosdev99/RegEx",
    description: "implemnentation of a regex engine form a Russ Cox article."
  },
  {
    name: "DeployKitty",
    stack: ["Rust, Ratatui, Infra, DevOps, Deployment, Agent, wip"],
    link: "https://github.com/Timosdev99/deploykitty",
    description: "DeployKitty is TUI that allow you setup and deploy apps and agent in one click ."
  },
  {
    name: "Distributed task-management system ",
    stack: ["TypeScript, System-design, Redis, Management "],
    link: "https://github.com/Timosdev99/distributed-taskmanager",
    description: "Backend service for a distributed task manager system, including real time data update."
  },
  {
    name: "Metis",
    stack: ["Rust, Ai, Cli, Agent, wip"],
    link: "https://github.com/Timosdev99/Metis",
    description: "Metis is a cli that allows you switch between different coding CLI without lossing context."
  },
  {
    name: "Contracts",
    stack: ["Solidity, Foundry, SmartContract, DeFi"],
    link: "https://github.com/Timosdev99/contracts",
    description: "Smart contracts for an off ramp and on ramp system"
  },
];



const oss = [
  {
    name: "Reth",
    stack: ["Rust, Distributed-System, Ethereum, Blockchain, infra"],
    link: "https://github.com/paradigmxyz/reth",
    description: "Modular, contributor-friendly and blazing-fast implementation of the Ethereum protocol."
  },
  {
    name: "Reams",
    stack: ["Rust, Ethereum, Blockchain, Lean-client"],
    link: "https://github.com/ReamLabs/ream",
    description: "an Ethereum Lean client written in Rust."
  },
  {
    name: "Crabtalk",
    stack: ["Rust, Ai, Dev-tool, Agent-Runtime, llm, Agents"],
    link: "https://github.com/crabtalk/crabtalk",
    description: "Agent daemon. Runs agents, dispatches tools, connects to MCP servers. Start it, talk to it, extend it with packages."
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} on GitHub`}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? "#172a45" : "#112240",
        y: hovered ? -6 : 0,
        boxShadow: hovered
          ? "0 20px 40px -10px rgba(2,12,27,0.7)"
          : "0 10px 30px -15px rgba(2,12,27,0.7)",
      }}
      transition={{ duration: 0.25, ease: [0.645, 0.045, 0.355, 1] }}
      className="relative flex flex-col p-7 rounded-sm cursor-pointer no-underline"
    >
      <div className="flex items-center justify-between mb-8">
        <Folder className="w-10 h-10 text-[#64ffda]" strokeWidth={1.5} />
        <motion.div
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Github className="w-5 h-5 text-[#a8b2d8]" />
        </motion.div>
      </div>

      <div className="flex flex-col flex-1">
        <motion.h3
          className="font-semibold text-lg mb-3 leading-snug"
          animate={{ color: hovered ? "#64ffda" : "#ccd6f6" }}
          transition={{ duration: 0.25 }}
        >
          {project.name}
        </motion.h3>
        <p className="text-[#8892b0] text-sm leading-relaxed flex-1">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.stack?.map((stack) => (
          <span
            key={stack}
            className="text-[#8892b0] text-xs font-mono"
          >
            {stack}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsGrid() {
  return (
    <>
      <FeaturedProjects />
      <section className="min-h-screen py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#ccd6f6] text-2xl font-semibold font-mono mb-12 flex items-center gap-4"
          >
            <span className="text-[#64ffda] text-xl">02.</span>
            Some Things I've Built
            <span className="flex-1 block h-px bg-[#233554] ml-4" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto py-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#ccd6f6] text-2xl font-semibold font-mono mb-12 flex items-center gap-4"
          >
            <span className="text-[#64ffda] text-xl">03.</span>
            Open source software i have contributed to
            <span className="flex-1 block h-px bg-[#233554] ml-4" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {oss.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </motion.div>
        </div>



      </section>
    </>
  );
}
