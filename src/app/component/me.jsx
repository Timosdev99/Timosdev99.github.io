
const buttonLinks = [
    { label: "GitHub", link: "https://github.com/timosdev99" },
    { label: "Linkedin", link: "www.linkedin.com/in/timothy-isah-ba10a928b" },
    { label: "Twitter", link: "https://x.com/Timothy9199" },
    { label: "Reddit", link: "https://www.reddit.com/user/tmfunc/" },
  ];
  
  const ButtonSection = () => {
    return (
      <div className="grid grid-cols-1 gap-4 text-center sm:ml-20 sm:w-96 sm:grid-cols-1 sm:grid-rows-4 lg:flex lg:gap-4 lg:flex-wrap lg:justify-center lg:w-auto p-4" >
        {buttonLinks.map((button, index) => (
          <a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-black-400 rounded-3xl text-xl text-white  hover:text-green-400  transition-all hover:text-2xl"
          >
            {button.label}
          </a>
        ))}
      </div>
    );
  };

const Intro = () => {
    return(
        <div className="top-80 mt-48 sm:mt-[700px] lg:mt-48  ">
            <h1 className="text-center justify-center text-white text-xl">Introduction</h1>
            <br />
            <div className="text-xl lg:w-[1300px]  text-gray-400 font-light">
            <p>thanks for getting this far. Welcome to my personal web site where i will share my skill, experience, projects, more about me and my journey as a programmer and what i have learnt </p>
            <br />
            <p>always feel free if you want to reach out to me or would like to collaborate on a project</p>
            <br />
            <p>you can also reach out to me on timothyisah4@gmail.com </p>
            </div>
            <div className="text-center">
                <ButtonSection/>
            </div>
        </div>
    )
}


export default Intro