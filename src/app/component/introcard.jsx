"use client";

import { useEffect, useState } from "react";

const platfrom = ["more about me", "my portfolio", "my github", "my blog"];

const IntroCard = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return ( <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-7xl text-slate-100 font-sans">TIMOSDEV99</h1>

</div>)

  return (
    <div>
      <h1 className="text-7xl text-slate-100 font-sans">TIMOSDEV99</h1>
      <div className="flex space-x-4">
        {platfrom.map((platform, index) => (
          <span key={index}
           className="text-white rounded-3xl bg-slate-800  px-4 py-2 hover:text-green-500 transition-all 500 ease-linear hover:text-xl"
           >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;



