import { FaGithub, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";

const buttonLinks = [
    { label: "GitHub", link: "https://github.com/timosdev99", icon: <FaGithub /> },
    { label: "Linkedin", link: "https://www.linkedin.com/in/timothy-isah-ba10a928b/", icon: <FaLinkedin /> },
    { label: "Twitter", link: "https://x.com/Timothy9199", icon: <FaTwitter /> },
    { label: "Reddit", link: "https://www.reddit.com/user/tmfunc/", icon: <FaReddit /> },
  ];
  
  export const ButtonSection = () => {
    return (
      <div className="grid grid-cols-1 gap-4 text-center  max-w-md sm:grid-cols-1 sm:grid-rows-4 lg:flex lg:flex-row lg:gap-4 lg:justify-center lg:items-center lg:max-w-none p-10" >
        {buttonLinks.map((button, index) => (
          <a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 border border-blue-400  rounded-3xl lg:text-sm text-white  hover:text-green-400  transition-all hover:text-xl flex items-center gap-2"
          >
            {button.icon}
            {button.label}
          </a>
        ))}
      </div>
    );
  };

const Intro = () => {
    return(
      <div className="top-80  mt-48 sm:mt-[-400px] lg:mt-[-400px] sm:w-full lg:w-full  mx-auto sm:left-[-25px]">
      <h1 className="text-center text-white text-xl">Introduction</h1>
      <br />
      <div className="lg:text-xl text-gray-400 font-light px-4">
        <p>
          Thanks for getting this far. Welcome to my personal website where I will
          share my skills, experience, projects, more about me, my journey as a
          programmer, and what I have learned.
        </p>
        <br />
        <p>Always feel free to reach out if you'd like to collaborate on a project.</p>
        <br />
        <p>You can also reach out to me at <a className="text-blue-700" href="mailto:timothyisah4@gmail.com">timothyisah4@gmail.com.</a></p>
      </div>
      <div className="text-center">
        <ButtonSection />
      </div>
    </div>
    
    )
}


export default Intro
