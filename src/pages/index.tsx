import { type NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion"
import HeadLayout from "../components/Layout/Head";
import ParallaxText from "@/components/ParallaxText";
import BackgroundImage from '../../public/background.jpg'

const Home: NextPage = () => {
  return (
    <>
      <HeadLayout />
      <main>
        <section className="relative min-h-screen pb-32">
          <div className="flex min-h-screen justify-center max-w-5xl mx-auto md:px-2 flex-col absolute left-0 right-0 px-8">
            <h1 className="z-10 py-4 font-semibold text-lg
            ">About</h1>
            <p className="z-10 w-80 md:w-96 text-slate-200 opacity-95">
              Full-stack developer based in Japan specializing in creating intuitive websites and applications. Sharing knowledge and thoughts on web development and personal growth through my blog. I love startups, books and people. I spend most of my time building things for the web.
            </p>
          </div>
          <div className="font-black text-6xl sm:text-8xl md:text-9xl text-shadow text-transparent max-w-5xl mx-auto flex flex-col justify-around min-h-screen px-2 select-none md:opacity-80 opacity-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="z-10"
            >
              <p className="text-start">Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="z-10"
            >
              <p className="text-end">Builder</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="z-10"
            >
              <p className="text-start">Reader</p>
            </motion.div>
          </div>
          <Image className="opacity-70 brightness-75 object-cover bg-center absolute select-none z-0" src={BackgroundImage} alt="Anime style background Image" fill />
        </section>
        <section className="py-32">
          <ParallaxText baseVelocity={-5}>I build things for the web.</ParallaxText>
        </section>
        <section className="relative py-32 max-w-6xl mx-auto">
          <div className="absolute flex justify-end w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="opacity-5 sm:opacity-20 select-none text-6xl sm:text-8xl md:text-[10rem]
            font-bold text-end leading-snug pr-2 sm:pr-5 md:pr-32 right-0">kaitakami<br />.dev</p>
            </motion.div>
          </div>
          <div className="py-8 sm:py-28 px-3 flex flex-wrap md:gap-20 gap-8 md:text-6xl text-4xl font-bold">
            <button className="z-10">/Blog</button>
            <button className=" text-gray-500 z-10">/Projects</button>
            <button className="text-gray-500 z-10">/Contact</button>
          </div>
          <div>
            <div className="h-56 w-80 sm:w-96 bg-gray-800 rounded-md">
              This website is in construction!
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
