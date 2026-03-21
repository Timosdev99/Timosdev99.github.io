import { Montserrat } from 'next/font/google';
import Nav from "./component/nav";
import Footer from "./component/footer";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({ subsets: ['latin'] });

const siteTitle = "Timothy Isah";
const siteDescription = "Timosdev personal website";
const siteUrl = "https://timosdev99.vercel.app";
const ogImage = "/X.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
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

        <main className="flex-grow">
          {children}

        </main>

        <footer>
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
