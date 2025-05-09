import { Jost, Open_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import BaseFooter from "@/components/BaseFooter";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jost",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Gardener - Gardening Website Template",
  description: "Make Your Home Like Garden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${openSans.variable}`}>
        <Navbar />
        {children}
        <BaseFooter />
      </body>
    </html>
  );
}
