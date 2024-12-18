import { devicon } from 'devicon';

const skillset = [
    { name: "javascript", icon: "devicon-javascript-plain colored " },
    { name: "css", icon: "devicon-css3-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "Express js", icon: "devicon-express-original" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next js", icon: "devicon-nextjs-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "Node js", icon: "devicon-nodejs-plain colored" },
    { name: "C lang", icon: "devicon-c-plain-wordmark colored" },
    { name: "Zig", icon: "devicon-zig-original colored" },
    { name: "Vercel", icon: "devicon-vercel-original colored" },
    { name: "Nodemon", icon: "devicon-nodemon-plain colored" },
    { name: "Aws", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Github", icon: "devicon-github-original colored" },
    { name: "Mongo DB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-original colored" },
    {name: "Postman", icon: "devicon-postman-plain colored"},
    {name: "Socketio", icon: "devicon-socketio-original colored"},
    {name: "Vscode", icon:"devicon-vscode-plain colored"},
    {name: "vim", icon: "devicon-vim-plain colored"},
    { name: "</> Restful API", icon: "devicon-restfulapi-original" },
    { name: "</> Problem Solving", icon: "devicon-problem-solving-original colored" },
    { name: "</> Team Work", icon: "devicon-teamwork-original colored" },

  ];
  
  const Skilldisplay = () => {
    return ( <div className="grid grid-cols-4 gap-x-6 gap-y-6 p-2">
        {skillset.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-slate-800 justify-center text-center rounded-3xl text-xl text-white hover:bg-slate-600 transition-all "
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
  