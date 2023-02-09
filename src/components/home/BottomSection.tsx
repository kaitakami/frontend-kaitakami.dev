import { motion } from 'framer-motion'
import { useState } from 'react'
import NoScrollLink from '../NoScrollLink'

interface Blog {
  title: string,
  category: string,

}

interface Selected {
  blog: {
    selected: boolean,
    content: Blog[] | undefined
  },
  projects: {
    selected: boolean,
  }
}


const BottomSection = () => {
  const [selected, setSelected] = useState<Selected>({
    blog: {
      selected: true,
      content: undefined
    },
    projects: {
      selected: false
    }
  })

  return (
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" z-10"
        >
          <button className="z-10">/Blog</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className=" z-10"
        >
          <button className=" text-gray-500 z-10">/Projects</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className=" z-10"
        >
          <button className="text-gray-500">/Contact</button>
        </motion.div>
      </div>
      <div className="my-20">
        <NoScrollLink href="/blog">Check this out</NoScrollLink>
      </div>
      <div>
        <div className="h-56 w-80 sm:w-96 bg-gray-800 rounded-md">
          This website is in construction!
        </div>
      </div>
    </section>
  )
}

export default BottomSection
