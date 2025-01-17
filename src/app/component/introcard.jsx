"use client";
import Link from 'next/link';
import Image from 'next/image';

const buttonLinks = [
  { label: "Projects", link: "/projects" },
  { label: "Resume", link: "/Timothy_resume.pdf", download: "Timothy_resume.pdf" },
  { label: "Blog", link: "/blog" },
  { label: "More About Me", link: "/about" }
];

const ButtonSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 text-center max-w-md sm:grid-cols-1 sm:grid-rows-4 lg:flex lg:flex-row lg:gap-4 lg:justify-start lg:items-center lg:max-w-none p-4">
      {buttonLinks.map((button, index) => (
        button.download ? ( 
          <a
            key={index}
            href={button.link}
            download={button.download} 
            className="text-white md:text-sm lg:text-sm rounded-3xl bg-gradient-to-r from-green-500 to-black-900 px-6 py-2 hover:text-blue-700 transition-all 500 ease-linear hover:text-xl w-full lg:w-auto whitespace-nowrap"
          >
            {button.label}
          </a>
        ) : (
          <Link
            key={index}
            href={button.link}
            className="text-white md:text-sm lg:text-sm rounded-3xl bg-gradient-to-r from-green-500 to-black-900 px-6 py-2 hover:text-blue-700 transition-all 500 ease-linear hover:text-xl w-full lg:w-auto whitespace-nowrap"
          >
            {button.label}
          </Link>
        )
      ))}
    </div>
  );
};

const IntroCard = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 py-12 lg:w-full lg:max-w-7xl lg:mx-auto lg:left-[-50px]  sm:left-[-10px] ">
      <h1 className="lg:text-6xl sm:text-4xl text-slate-100 font-bold">TIMOSDEV99</h1>
      <br />
      <br />
      <p className="max-w-[700px] text-gray-400 leading-relaxed  lg:w-full lg:text-xl sm:w-80 sm:text-xl ">
        I'm a backend developer, whose world revolves around the intricate dance of data and logic that powers the digital experiences we interact with daily. But my passion for technology doesn't stop at writing efficient code or optimizing database queries. I'm on a quest to understand the very fabric of computation itself.
      </p>
      <br />
      <br />
      <Image
        src="/Cool.jpg"
        alt="Example image"
        width={500}
        height={500}
        className="rounded-full object-cover mx-auto w-48 h-48 sm:w-48 sm:h-48 lg:w-[300px] lg:h-[300px] lg:absolute lg:left-[1000px] lg:top-12"
      />
      <div className="mt-2">
        <ButtonSection />
      </div>
    </div>
  );
};

export default IntroCard;
