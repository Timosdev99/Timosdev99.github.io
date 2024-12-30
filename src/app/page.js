"use client"
import Introcard from "./component/introcard";
import Intro from "./component/me";
import Skill from "./component/skills";
import Aboutme from "./component/aboutme";
import { useState } from "react";
export default function Home() {
  const [show, setShow] = useState(false); 

  const toggleShowMore = () => {
    setShow((prev) => !prev); 
  };

  return (
    <div className=" flex flex-col items-center min-h-screen gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Introcard />
        <section className="mt-96 sm:w-full">
          <Intro />
        </section>
      </main>
      <button
        onClick={toggleShowMore}
        className="px-4 py-2 bg-gradient-to-r from-blue-900 via-blue-800 to-black-900 justify-center text-center rounded-3xl text-xl text-white hover:bg-slate-600 transition-all hover:text-green-500"
      >
        {show ? "Show Less" : "Show More"}
      </button>

     
      {show && (
       <div>
         <section className="w-full flex justify-center ">
          <Skill />
        </section>
        <br />
        <br />
         <Aboutme />
       </div>
      )}

    </div>
  );
}
