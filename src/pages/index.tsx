import { type NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion"
import HeadLayout from "../components/Layout/Head";
import ParallaxText from "@/components/ParallaxText";
import BackgroundImage from '../../public/background.webp'
import PhoneImage from "../../public/phoneBackground.webp"
import Animate from "@/components/Layout/Animate";
import Nav from "@/components/Layout/Nav";
import BottomSection from '../components/home/BottomSection';
import Footer from "@/components/Layout/Footer";

const Home: NextPage<{ blogs: Blog[], projects: Project[] }> = ({ blogs, projects }) => {
  return (
    <>
      <HeadLayout />
      <Animate>
        <>
          <Nav delay={3} />
          <main>
            <section className="relative min-h-screen pb-32">
              <div className="absolute left-0 right-0 flex flex-col justify-center max-w-5xl min-h-screen px-8 mx-auto md:px-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="z-10 drop-shadow-2xl"
                >
                  <h1 className="sr-only">Kai Takami</h1>
                  <h2 className="py-4 text-lg font-semibold">About</h2>
                  <p className="w-72 sm:w-80 md:w-96 text-slate-200 opacity-95">
                    Full-stack developer based in Japan specializing in creating intuitive websites and applications. Sharing knowledge and thoughts on web development and personal growth through my blog. I love startups, books and people. I spend most of my time building things for the web.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col justify-around max-w-5xl min-h-screen px-2 mx-auto text-6xl font-black text-transparent select-none sm:text-8xl md:text-9xl text-shadow md:opacity-80 opacity-40">
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
              <Image className="absolute z-0 object-cover bg-center select-none md:hidden opacity-70 brightness-75" src={PhoneImage} alt="Anime style background Image for phone" fill sizes="100wv" />
              <Image className="absolute z-0 hidden object-cover bg-center select-none md:block opacity-70 brightness-75" src={BackgroundImage} alt="Anime style background Image" fill />
            </section>
            <section className="py-32 bg-zinc-900">
              <ParallaxText baseVelocity={-5}>I build things for the web.</ParallaxText>
            </section>
            <BottomSection blogs={blogs} projects={projects} />
          </main>
          <Footer />
        </>
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
  }
  slug: string
  publishedAt: string
}

interface Project {
  title: string,
  stack: string,
  id: string,
  updatedAt: string,
  slug: string
  description: string
}

import { graphQLFetch } from "@/utils/graphQLFetch";
import type { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale ||= 'en'
  const query = `
                query Homepage {
                  blogs(last: 5, locales: ${locale}) {
                    id
                    title
                    description
                    category {
                      name
                      slug
                    }
                    slug
                    publishedAt
                  }
                  projects(last: 5, locales: ${locale}) {
                    title
                    stack
                    id
                    updatedAt
                    slug
                    description
                  }
                }
              `

  const { blogs, projects } = await graphQLFetch<{ blogs: Blog[], projects: Project[] }>(query)
  return {
    props: {
      blogs,
      projects
    },
    revalidate: 3600 * 24 // revalidate every day at most
  }
}
