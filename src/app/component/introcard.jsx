"use client";
import Link from 'next/link';
import Image from 'next/image';
const buttonLinks = [
    { label: "Projects", link: "/projects" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Blog", link: "/blog" },
    { label: "About Me", link: "/about" }
  ];
  
  const ButtonSection = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {buttonLinks.map((button, index) => (
          <Link
            key={index}
            href={button.link}
            className="text-white text-xl rounded-3xl bg-gradient-to-r from-green-500 to-black-900  px-4 py-2 hover:text-green-500 transition-all 500 ease-linear hover:text-2xl"
          >
            {button.label}
          </Link>
        ))}
      </div>
    );
  };

const IntroCard = () => {

  return (
    <div className="mb-80 left-44 absolute top-48 ">
      <h1 className="text-6xl text-slate-100 font-bold">TIMOSDEV99</h1>
      <br />
      <br />
      <p className="max-w-[700px] mx-auto text-gray-400 leading-relaxed text-left text-2xl ">
        I'm a backend developer, my world revolves around the intricate dance of data and logic that powers the digital experiences we interact with daily. But my passion for technology doesn't stop at writing efficient code or optimizing database queries. I'm on a quest to understand the very fabric of computation itself.
      </p>
      <br />
      <br />
      <div className="flex space-x-4">
        <ButtonSection/>
      </div>
      
      <Image
      src="/cool.jpg"
      alt="Example image"
      width={500} 
      height={500}
       className="rounded-full object-cover absolute left-[1000px] bottom-1"
      />
      
    
    </div>
  );
};

export default IntroCard;



