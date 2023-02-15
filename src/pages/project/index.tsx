import Link from "next/link"
import { motion } from "framer-motion"
import Animate from "@/components/Layout/Animate"
import { graphQLFetch } from "@/utils/graphQLFetch"
import HeadLayout from "@/components/Layout/Head"
import Layout from "@/components/Layout/Layout"
import type { GetStaticProps, NextPage } from "next"

interface Project {
  title: string,
  stack: string,
  id: string,
  updatedAt: string,
  slug: string
  description: string
}

const Index: NextPage<{ projects: Project[] }> = ({ projects }) => {

  return (
    <>
      <HeadLayout title="Projects" />
      <Animate>
        <>
          <Layout>
            <>
              <div className="max-w-2xl px-5 md:px-0 m-auto flex flex-col gap-6 pb-32 space-y-5">
                <h1 className="text-6xl font-bold">Projects</h1>
                <hr className='border-gray-800' />
                <div className="flex flex-wrap gap-7 justify-between pb-20">
                  {/* Display filtered blogs */}
                  {projects.map((project, index) => (
                    <Link
                      key={project.id}
                      href={`/project/${project.slug}`}
                      className="max-w-2xl w-full m-auto relative"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0 + (index / 35) }}
                        className="group bg-transparent px-6 pb-8 shadow-xl ring-1 ring-slate-200/10 transition-all duration-300 hover:shadow-2xl sm:rounded-lg sm:px-10 hover:scale-105 py-3">
                        <div className="pt-5 text-base leading-7 text-slate-300 transition-all duration-300 group-hover:text-white/90 flex justify-between flex-col h-full space-y-8">
                          <div className="space-y-2">
                            <h1 className="font-bold text-xl text-white drop-shadow-2xl">{project.title}</h1>
                            <p className='truncate'>{project.description}</p>
                          </div>
                          <div className='capitalize'>
                            <span className='border rounded-sm border-white/5 px-4 py-3 transition-all group-hover:bg-zinc-800 capitalize'>/{project.stack}</span>
                          </div>
                          <p className='truncate text-sm absolute right-0 bottom-0 p-5 text-gray-500'>{new Date(project.updatedAt).toDateString()}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          </Layout>
        </>
      </Animate>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale ||= 'en'
  const query = `
                query Projects {
                  projects(orderBy: publishedAt_DESC, locales: ${locale}) {
                    title
                    stack
                    id
                    tools
                    updatedAt
                    slug
                    description
                  }
                }
                `
  const { projects } = await graphQLFetch<{ projects: Project[] }>(query)

  return {
    props: {
      projects
    },
    revalidate: 3600 * 24
  }
}




