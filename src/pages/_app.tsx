import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${inter.variable} font-sans bg-[#1f1f1f] text-white`}>
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
