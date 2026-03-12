import { Github } from "lucide-react"
import Link from "next/link"

const Footer = () => {


  const socials = [
    { label: "Telegram", href: "https://t.me/tmot11x" },
    { label: "Twitter", href: "https://x.com/Timothy9199" },
    { label: "Discord", href: "https://discord.gg/tmfunc" },
    { label: "Github", href: "https://github.com/Timosdev99" },
  ];



  return (
    <>
      <style>{`
        .footer-link-dot {
          position: relative;
        }
        .footer-link-dot::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #0ea5e9; /* Tailwind blue-500 */
          border-radius: 50%;
          bottom: -4px; /* Position below the link */
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 8px 2px #0ea5e9; /* Glowing effect */
          opacity: 0; /* Initially hidden */
          transition: opacity 0.3s ease;
          z-index: -1; /* Ensure it's behind the text */
        }
        .footer-link-dot:hover::before {
          opacity: 1; /* Show on hover */
        }
      `}</style>
      <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center p-4 gap-4 w-full">
        <p className="text-xl text-white">
          &copy; {new Date().getFullYear()} Timosdev99. All rights reserved
        </p>

        <div className="flex gap-4">
          {socials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              className="footer-link-dot text-white hover:text-gray-400 transition-colors"
            >
              {social.label}
            </Link>
          ))}
        </div>

      </footer>
    </>
  )
}

export default Footer 
