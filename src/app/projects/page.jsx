import React from 'react';

const project = [
    {
        name: "WebSocket Protocol",
        stack: "Node.Js",
        link: "https://github.com/Timosdev99/websocket-server",
        description: "A WebSocket server implementation enabling real-time, bidirectional communication between clients and servers."
    }, {
        name: "HR Management AI agent",
        stack: "TypeScript, Express.js, LangGraph",
        link: "https://github.com/Timosdev99/Agent",
        description: "an AI agent used for HR management it uses LangGraph and MongoDB for generating and managing AI agents and conversational application using agentic Approach."
    },
    {
        name: "RegEx patttern recognition engine",
        stack: "Zig",
        link: "https://github.com/Timosdev99/RegEx",
        description: "implemnentation of a regex engine form a Russ Cox article."
    },
    {
        name: "File explorer",
        stack: "Zig",
        link: "https://github.com/Timosdev99/file_explorer",
        description: "A simple file explorer TUI in zig, that can analyze file, navigate to directory and also list and delete file."
    },
    {
        name: "Health Compliance App Backend",
        stack: "Node.Js, Cloudinary, MongoDB",
        link: "https://github.com/Timosdev99/health-compliance-API",
        description: "Backend service for managing health compliance data, including secure storage and image handling with Cloudinary."
    },
     {
        name: "Distributed task-management system ",
        stack: "TypeScript, Express, Redis, socket.io, MongoDB, Gemini",
        link: "https://github.com/Timosdev99/distributed-taskmanager",
        description: "Backend service for a distributed task manager system, including real time data update."
    },
    {
        name: "Task Manager CLI Tool",
        stack: "Zig",
        link: "https://github.com/Timosdev99/simple-taskmanager",
        description: "A lightweight command-line task manager built with Zig, focusing on simplicity and speed."
    },
    {
        name: "Idea Generator CLI",
        stack: "Node.Js, Commander.js, Gemini API",
        link: "https://github.com/Timosdev99/ideagen",
        description: "A CLI tool for generating AI-powered project ideas to spark creativity. It leverages Commander.js for an intuitive interface and integrates the Gemini API to deliver intelligent and context-aware suggestions."
    },
    {
        name: "My Personal Website",
        stack: "Next.js, Tailwind CSS, Github Action",
        link: "https://github.com/Timosdev99/Timosdev99.github.io",
        description: "A responsive personal portfolio website showcasing my skills, projects, and contact information."
    },
    
];

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                {project.map((project, index) => (
                    <div
                        key={index}
                        className=" shadow-md rounded-lg overflow-hidden border border-blue-800 transition-transform hover:scale-105 "
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-semibold  text-white mb-2">{project.name}</h2>
                            <p className="text-sm text-white  mb-4">{project.stack.split(", ").map((tech, i) => (
                                    <span
                                        key={i}
                                       className="text-xs font-medium my-1  text-white bg-slate-600 mr-1 px-2 py-1 rounded-full hover:animate-shake inline-block"
                                    >
                                        {tech}
                                    </span>
                                ))}</p>
                            <p className="text-white mb-4">{project.description}</p>
                            {project.link && (
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:underline"
                                >
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
