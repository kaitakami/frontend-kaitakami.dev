import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Blogs from './Blogs';
import Projects from './Projects';
import Contact from './Contact';

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

interface Selected {
  blog: boolean
  projects: boolean
  contact: boolean
}


const BottomSection: React.FC<{ blogs: Blog[], projects: Project[] }> = ({ blogs, projects }) => {
  const [selected, setSelected] = useState<Selected>({
    blog: true,
    projects: false,
    contact: false,
  }
  )
  const selectedClasses = "z-10 text-white"

  const handleSelected = (type: string) => {
    const newState = {
      blog: false,
      projects: false,
      contact: false
    }
    setSelected(({
      ...newState,
      [type]: true
    }))
  }

  return (
    <section className="relative py-32 max-w-6xl mx-auto">
      <div className="absolute flex justify-end w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="opacity-5 sm:opacity-10 select-none text-6xl sm:text-8xl md:text-[10rem]
            font-bold text-end leading-snug pr-2 sm:pr-5 lg:pr-20 right-0">kaitakami<br />.dev</p>
        </motion.div>
      </div>
      <div className="py-8 sm:py-28 px-3 flex flex-wrap md:gap-20 gap-8 md:text-6xl text-4xl font-bold text-gray-500">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" z-10"
        >
          <button className={`${selected.blog ? selectedClasses : 'transition-colors duration-500'}`} onClick={() => handleSelected('blog')}>/Blog</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className=" z-10"
        >
          <button className={`${selected.projects ? selectedClasses : 'transition-all duration-500'}`} onClick={() => handleSelected('projects')}>/Projects</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <button className={`${selected.contact ? selectedClasses : 'transition-all duration-500'}`} onClick={() => handleSelected('contact')}>/Contact</button>
        </motion.div>
      </div>
      <div className='pb-20 min-h-[500px]' id='contact'>
        {selected.blog && <Blogs blogs={blogs} />}
        {selected.projects && <Projects projects={projects} />}
        {selected.contact && <Contact />}
      </div>
    </section>
  )
}

export default BottomSection
