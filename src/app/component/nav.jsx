"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = () => {

    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="p-4 ">
       
        <div className="flex justify-between items-center">
         
        
          <button
            className="md:hidden block focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
  
         
          <div className="hidden md:flex space-x-4 text-2xl justify-start items-center p-4  top-6 left-48 relative text ">
            <Link
              href="/"
              className="mr-4 text-2xl hover:text-green-400 transition-all duration-500 ease-linear hover:text-3xl"
            >
              Home
            </Link>
            <Link
              href="#"
              className="mr-4 text-2xl hover:text-green-400 transition-all duration-500 ease-linear hover:text-3xl"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="mr-4 text-2xl hover:text-green-400 transition-all duration-500 ease-linear hover:text-3xl"
            >
              Blog
            </Link>
          </div>
        </div>
  
        <div
  className={`md:hidden mt-4 space-y-2 transition-all duration-500 ease-linear ${
    isMenuOpen
      ? "opacity-100 translate-y-0 max-h-screen"
      : "opacity-0 -translate-y-10 max-h-0 overflow-hidden"
  }`}
>
  <Link
    href="/"
    className="block text-2xl hover:text-green-400 transition-all duration-300"
  >
    Home
  </Link>
  <Link
    href="/portfolio"
    className="block text-2xl hover:text-green-400 transition-all duration-300"
  >
    Portfolio
  </Link>
  <Link
    href="/blog"
    className="block text-2xl hover:text-green-400 transition-all duration-300"
  >
    Blog
  </Link>
</div>

      </nav>


    )
}


export default nav


