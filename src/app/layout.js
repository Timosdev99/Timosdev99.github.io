import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./component/nav";
import Footer from "./component/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Timothy Isah",
  description: "Timosdev personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-black via-[#0d1117] to-[#041534] bg-no-repeat  `}
      >
  <header>
    <Nav />
  </header>

        {children}

        <footer>
          {/* <Footer /> */}
        </footer>
      </body>
    </html>
  );
}
