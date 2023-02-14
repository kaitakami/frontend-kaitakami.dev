import Link from "next/link"
import { motion } from "framer-motion"
import { IconExternalLink } from '@tabler/icons-react';
interface Project {
  title: string,
  stack: string,
  id: string,
  slug: string
  description: string
}

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Link href="/project" className='transition-all text-white/80 hover:text-white hover:-translate-y-3 text-xl flex w-fit pb-20 z-10'>
        <p className='my-auto px-3 z-10'>Check out my portfolio</p>
        <IconExternalLink size={36} stroke={1} />
      </Link>
      <div className='flex gap-8 overflow-auto p-3'>
        {projects.map(project => (
          <Link key={project.id} href={`/project/${project.slug}`} >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-80 sm:w-96 group bg-transparent px-6 pb-8 shadow-xl ring-1 ring-slate-200/10 transition-all duration-300 hover:shadow-2xl sm:rounded-lg sm:px-10 h-56 hover:scale-105 py-3">
              <div className=" space-y-2 pt-5 text-base leading-7 text-slate-300 transition-all duration-300 group-hover:text-white/90 flex justify-between flex-col h-full">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white drop-shadow-2xl">{project.title}</h3>
                  <p className='truncate'>{project.description}</p>
                </div>
                <div>
                  <span className='border rounded-sm border-white/5 px-4 py-3 transition-all group-hover:bg-zinc-800'>{project.stack}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Projects
