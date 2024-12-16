"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = () => {

    const pathname = usePathname()

    return (
        <nav className="flex justify-center items-center p-4"> 
        <div className="absolute top-6 left-50">
        <Link href="/" className= "mr-4 text-xl hover:text-yellow-300 transition-all 500  all ease-linear hover:text-2xl">Home</Link>
        <Link href="/about" className="mr-4 text-xl hover:text-yellow-300 transition-all 500  all ease-linear hover:text-2xl" >portfolio</Link>
        <Link href="/product" className="mr-4 text-xl hover:text-yellow-300 transition-all 500  all ease-linear hover:text-2xl">blog</Link>
  
        </div>
          </nav>
    )
}


export default nav


