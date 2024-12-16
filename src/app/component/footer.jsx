import { Github } from "lucide-react"
import Link from "next/link"

const footer = () => {
    return (
        <footer className="flex justify-center items-center p-4">
            <p className="text-xl text-white absolute mb-10 ">
                &copy; 2024 Timosdev99. All rights reserved
            </p>

            <a href="https://github.com/Timosdev99" className="absolute right-10 mr-20 mb-10">
    <Github 
    width={40}
    height={40}
        className=" bg-gray-800 text-white rounded-md hover:bg-green-400 transition-all duration-500 ease-linear"
    />
</a>
     
               </footer>
    )
}

export default footer 