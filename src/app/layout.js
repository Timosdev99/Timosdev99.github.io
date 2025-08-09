import { Montserrat } from 'next/font/google';
import Nav from "./component/nav";
import Footer from "./component/footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: "Timothy Isah",
  description: "Timosdev personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        className={`antialiased`}
      >
        <div class="stars stars-small"></div>
        <div class="stars stars-medium"></div>
        <div class="stars stars-large"></div>
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