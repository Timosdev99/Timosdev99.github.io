"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/library", label: "Library" },
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work With Me" },
  { href: "/about", label: "About" },
  { href: "/stats", label: "Stats" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between relative z-50 bg-transparent">


      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-700">

          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">
            T
          </div>
        </div>
        <span className="text-white font-bold text-base">.dev</span>
      </Link>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-0.5 bg-[#111111] border border-[#2a2a2a] rounded-md px-1 py-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`
          px-3 py-1.5 rounded text-sm font-medium transition-all duration-150
          ${isActive
                    ? "bg-[#222222] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                  }
          `}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">

        <Link
          href="/work"
          className="hidden sm:flex items-center gap-2 border border-[#2a2a2a] hover:border-green-500 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:text-green-400"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
          Available for hire
        </Link>


        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>


      <div className={`
      md:hidden absolute top-full left-0 right-0 z-40
      bg-[#0f0f0f] border-b border-[#1a1a1a]
      transition-all duration-300 ease-in-out overflow-hidden
      ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}>
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`
            px-3 py-2.5 rounded text-sm font-medium transition-colors duration-150
            ${isActive
                    ? "bg-[#1a1a1a] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }
            `}
              >
                {label}
              </Link>
            );
          })}


          <Link
            href="/work"
            className="mt-3 flex items-center gap-2 border border-[#2a2a2a] rounded-full px-4 py-2 text-sm font-semibold text-white w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
            Available for hire
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
