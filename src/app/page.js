"use client";

import Introcard from "./component/introcard";
import Skill from "./component/skills";
import LetTalkSection from "./component/LetTalkSection";
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

      <main>
        <Introcard />
        <Skill />
        <LetTalkSection />
      </main>




    </div>
  );
}
