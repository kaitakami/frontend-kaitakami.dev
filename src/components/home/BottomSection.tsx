import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link'

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

interface Selected {
  blog: {
    selected: boolean,
    content: Blog[] | undefined
  },
  projects: {
    selected: boolean,
  }
}


const BottomSection: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
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
          <p className="opacity-5 sm:opacity-10 select-none text-6xl sm:text-8xl md:text-[10rem]
            font-bold text-end leading-snug pr-2 sm:pr-5 lg:pr-20 right-0">kaitakami<br />.dev</p>
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
      <div className='my-20'>
        <Link href="/blog" className='transition-all text-white/80 hover:text-white hover:-translate-y-3 text-xl flex w-fit'>
          <p className='my-auto px-3'>View all blogs</p>
          <IconExternalLink size={36} stroke={1} />
        </Link>
      </div>
      <div className='flex gap-8 overflow-auto p-3'>
        {blogs.map(blog => (
          <Link key={blog.id} href={`blog/${blog.category.slug}/${blog.slug}`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-80 sm:w-96 group bg-transparent px-6 pb-8 shadow-xl ring-1 ring-slate-200/10 transition-all duration-300 hover:shadow-2xl sm:rounded-lg sm:px-10 h-56 hover:scale-105 py-3">
              <div className=" space-y-2 pt-5 text-base leading-7 text-slate-300 transition-all duration-300 group-hover:text-white/90 flex justify-between flex-col h-full">
                <div>
                  <h1 className="font-bold text-xl text-white drop-shadow-2xl">{blog.title}</h1>
                  <p className=''>{blog.description}</p>
                </div>
                <div className='capitalize'>
                  <span className='border rounded-sm border-white/5 px-4 py-3 transition-all group-hover:bg-zinc-800'>/{blog.category.name}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}

      </div>
    </section>
  )
}

export default BottomSection
