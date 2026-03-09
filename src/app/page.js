"use client";

import Introcard from "./component/introcard";
import Intro from "./component/me";
import Skill from "./component/skills";
import Aboutme from "./component/aboutme";
import Loading from "./loading";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex flex-col items-center min-h-screen gap-16 p-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      {isLoading && (
        <Loading onDone={() => setIsLoading(false)} />
      )}

      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Introcard />
        <section className="mt-96">
          <Intro />
        </section>
      </main>

      <button
        onClick={() => setShow((p) => !p)}
        className="lg:mt-[-100px] px-4 py-2 bg-gradient-to-r from-blue-900 via-blue-800 to-black-900 justify-center text-center rounded-3xl text-xl text-white hover:bg-slate-600 transition-all hover:text-green-500"
      >
        {show ? "Show Less" : "Show More"}
      </button>

      {show && (
        <div>
          <section className="w-full flex justify-center">
            <Skill />
          </section>
          <br /><br />
          <Aboutme />
        </div>
      )}
    </div>
  );
}
