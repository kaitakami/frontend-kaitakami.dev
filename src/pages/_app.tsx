import { type AppType } from "next/dist/shared/lib/utils";
import { AnimatePresence } from 'framer-motion'
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
      <div
        className={`${inter.variable} font-sans bg-[#1f1f1f] text-white selection:bg-fuchsia-400 min-h-screen relative`}
      >
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  )
};

export default MyApp;
