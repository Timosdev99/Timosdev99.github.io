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
        name: "Health Compliance App Backend",
        stack: "Node.Js, Cloudinary, MongoDB",
        link: "https://github.com/Timosdev99/health-compliance-API",
        description: "Backend service for managing health compliance data, including secure storage and image handling with Cloudinary."
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
        name: "Blog App Backend",
        stack: "Node.Js, MongoDB, Cloudinary",
        link: "https://github.com/Timosdev99/blog-api-s-",
        description: "RESTful API for blog applications, offering features like post creation, media uploads, and user management."
    },
    {
        name: "My Personal Website",
        stack: "Next.js, Tailwind CSS",
        link: "https://github.com/Timosdev99/Timosdev99.github.io",
        description: "A responsive personal portfolio website showcasing my skills, projects, and contact information."
    },
    {
        name: "CSV Parser",
        stack: "Zig",
        link: "https://github.com/Timosdev99/CSV-parser-",
        description: "A Zig-based CSV to JSON parser designed for high performance and lightweight file conversion."
    },
    {
        name: "Weather Info API",
        stack: "Node.Js",
        link: "https://github.com/Timosdev99/weather-info-endpoint",
        description: "An API that provides real-time weather information for any location and it uses geographical data to fetch information with easy-to-integrate endpoints."
    },
    {
        name: "Promptia",
        stack: "Next.js, Tailwind CSS, MongoDB",
        link: "https://github.com/Timosdev99/next-app",
        description: "A modern web application combining MongoDB's database capabilities with a clean UI built with Next.js and Tailwind CSS. It is a platform built to share different prompt"
    },
    {
        name: "Next App",
        stack: "Next.js, Clerk, Tailwind CSS",
        link: "https://github.com/Timosdev99/Next-port-",
        description: "A Next.js application featuring user authentication with Clerk and styled with Tailwind CSS for a seamless experience."
    },
    {
        name: "User Authentication",
        stack: "Node.Js, JWT",
        link: "https://github.com/Timosdev99/user-authentication-with-node-js",
        description: "A secure authentication system using JSON Web Tokens (JWT) for Node.js applications."
    }
];

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                {project.map((project, index) => (
                    <div
                        key={index}
                        className=" shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105 bg-gradient-to-t from-blue-700 via-black to-black-900"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-semibold  text-white mb-2">{project.name}</h2>
                            <p className="text-sm text-white  mb-4">{project.stack.split(", ").map((tech, i) => (
                                    <span
                                        key={i}
                                       className="text-xs font-medium bg-gradient-to-r from-blue-700 to-black-900 text-white bg-slate-600 mr-1 px-2 py-1 rounded-full hover:animate-shake inline-block"
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
