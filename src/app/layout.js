import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The best Tailwind templates & UI kits on the internet | Tailwind Awesome",
  description: "A curated directory of the best Tailwind templates and SEO Tools to kickstart your next design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
