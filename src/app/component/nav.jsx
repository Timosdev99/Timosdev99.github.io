"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = () => {

    const pathname = usePathname()

    return (
        <nav className="flex justify-start items-center p-4 relative text ">
  <div className="absolute top-6 left-48">
    <Link
      href="/"
      className="mr-4 text-2xl hover:text-green-400 transition-all duration-500 ease-linear hover:text-3xl"
    >
      Home
    </Link>
    <Link
      href="/portfolio"
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
  
</nav>


    )
}


export default nav


