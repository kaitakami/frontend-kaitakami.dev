import { type NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion"
import HeadLayout from "../components/Layout/Head";
import ParallaxText from "@/components/ParallaxText";
import BackgroundImage from '../../public/background.jpg'
import PhoneImage from "../../public/phonebackground.png"
import Animate from "@/components/Layout/Animate";
import BottomSection from '../components/home/BottomSection';

const Home: NextPage = () => {
  return (
    <>
      <HeadLayout />
      <Animate>
        <main>
          <section className="relative min-h-screen pb-32">
            <div className="flex min-h-screen justify-center max-w-5xl mx-auto md:px-2 flex-col absolute left-0 right-0 px-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="z-10 drop-shadow-2xl"
              >
                <h1 className="z-10 py-4 font-semibold text-lg">About</h1>
                <p className="w-80 md:w-96 text-slate-200 opacity-95">
                  Full-stack developer based in Japan specializing in creating intuitive websites and applications. Sharing knowledge and thoughts on web development and personal growth through my blog. I love startups, books and people. I spend most of my time building things for the web.
                </p>
              </motion.div>
            </div>
            <div className="font-black text-6xl sm:text-8xl md:text-9xl text-shadow text-transparent max-w-5xl mx-auto flex flex-col justify-around min-h-screen px-2 select-none md:opacity-80 opacity-40">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10"
              >
                <p className="text-start drop-shadow-2xl">Developer</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="z-10"
              >
                <p className="text-end drop-shadow-2xl">Builder</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="z-10"
              >
                <p className="text-start drop-shadow-2xl">Reader</p>
              </motion.div>
            </div>
            <Image className="md:hidden opacity-70 brightness-75 object-cover bg-center absolute select-none z-0" src={PhoneImage} alt="Anime style background Image" fill />
            <Image className="hidden md:block opacity-70 brightness-75 object-cover bg-center absolute select-none z-0" src={BackgroundImage} alt="Anime style background Image" fill />
          </section>
          <section className="py-32 bg-zinc-900">
            <ParallaxText baseVelocity={-5}>I build things for the web.</ParallaxText>
          </section>
          <BottomSection />
        </main>
      </Animate>
    </>
  );
};

export default Home;

interface Blog {
  id: string
  title: string
  description: string
  category: {
    name: string
    slug: string
    color: {
      css: string
    }
  }
  slug: string
  publishedAt: string
}

import { graphQLFetch } from "@/utils/graphQLFetch";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const ENDPOINT = 'https://us-west-2.cdn.hygraph.com/content/cldwln9ha2j1f01rrfaib8ave/master'
  locale ||= 'en'
  const query = `
                query Blog {
                  blogs(last: 5, locales: ${locale}) {
                    id
                    title
                    description
                    category {
                      name
                      slug
                      color {
                        css
                      }
                    }
                    slug
                    publishedAt
                  }
                }
              `

  const { blogs } = await graphQLFetch<{ blogs: Blog[] }>

    (ENDPOINT, query)
  console.log(blogs)

  return {
    props: {}
  }
}
