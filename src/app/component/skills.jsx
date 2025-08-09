import { devicon } from 'devicon';
import { useState } from 'react';

const skillset = [
    { name: "javascript", icon: "devicon-javascript-plain colored " },
    { name: "Typescript", icon: "devicon-typescript-plain colored" },
    { name: "Css", icon: "devicon-css3-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "Express js", icon: "devicon-express-original" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next js", icon: "devicon-nextjs-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "Node js", icon: "devicon-nodejs-plain colored" },
    { name: "C lang", icon: "devicon-c-plain-wordmark" },
    { name: "Zig", icon: "devicon-zig-original colored" },
    { name: "Vercel", icon: "devicon-vercel-original colored" },
    { name: "Rust", icon: "devicon-rust-original colored" },
    { name: "Aws", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Github", icon: "devicon-github-original colored" },
    { name: "Mongo DB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-original" },
    {name: "Postman", icon: "devicon-postman-plain colored"},
    {name: "Socketio", icon: "devicon-socketio-original colored"},
    {name: "Vscode", icon:"devicon-vscode-plain colored"},
    {name: "vim", icon: "devicon-vim-plain colored"},
    {name: "Docker", icon: "devicon-docker-plain colored"},
    {name: "oAuth", icon: "devicon-oauth-plain colored"},
    {name: "GithubAction", icon: "devicon-githubactions-plain"},
    { name: "</> Restful API", icon: "devicon-restfulapi-original" },
    { name: "</> Problem Solving", icon: "devicon-problem-solving-original colored" },
    { name: "</> Team Work", icon: "devicon-teamwork-original colored" },

  ];
  
  const Skilldisplay = () => {
    return ( <div className="grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6 p-2 sm:grid-cols-2 sm:gap-x-40 sm:gap-y-8 sm:mr-44 lg:mr-10">
        {skillset.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white/10 border border-blue-400 justify-center text-center rounded-3xl lg:w-60 lg:text-xl text-white hover:bg-white/20 transition-all sm:w-40 backdrop-blur-md shadow-lg"
          >
            <i className= {`${skill.icon} mr-4`}></i> 
            {skill.name}
          </span>
        ))}
      </div>)
  }

  const Skill = () => {
    return (
      <div>
        <h1 className="text-center justify-center text-white text-xl ">Skills</h1>
        <br />
        <Skilldisplay/>
    
    <div>

    </div>

      </div>
    );
  };
  
  export default Skill;
  
