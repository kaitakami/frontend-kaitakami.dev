import Image from "next/image"
import HeadLayout from "@/components/Layout/Head"
import Animate from "@/components/Layout/Animate"
import Layout from "@/components/Layout/Layout"
import { graphQLFetch } from "@/utils/graphQLFetch"
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IconBrandGithub } from "@tabler/icons-react"
import { marked } from "marked"

const Project: NextPage<{ project: Project }> = ({ project }) => {
  const MDX = marked(project.content)

  return (
    <>
      <HeadLayout title={project.title} />
      <Animate>
        <>
          <Layout>
            <>
              <div className="max-w-3xl px-5 md:px-0 m-auto flex flex-col gap-6">
                <h1 className="text-4xl font-bold">{`${project.title} - ${project.stack}`}</h1>
                <div className="flex gap-6">
                  {project.github && (<a href={project.github} className='border rounded-sm border-white/5 px-4 py-3 transition-all hover:bg-zinc-800 flex' target="_blank" rel="noreferrer">
                    <IconBrandGithub />
                  </a>)}
                  {project.demo && <a href={project.demo} className='border rounded-sm border-white/5 px-4 py-3 transition-all hover:bg-zinc-800' target="_blank" rel="noreferrer">
                    Live Demo
                  </a>}
                </div>
                <p className="text-gray-500 text-sms">{new Date(project.updatedAt).toDateString()}</p>
                <hr className="border-gray-800" />
                <div>
                  <div>
                    <h3 className="text-2xl font-bold">Tools</h3>
                    <div className="flex flex-wrap justify-between py-3 gap-2">
                      {project.tools[0].tools.map(tool => (
                        <span className='border rounded-sm border-white/5 px-4 py-3' key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mdx" dangerouslySetInnerHTML={{ __html: MDX }}>
                  </div>
                  <div>
                    <Image src={project.image.url} alt={`${project.title} preview image`} width={1200} height={800}
                    />
                  </div>
                </div>
              </div>
            </>
          </Layout>
        </>
      </Animate>
    </>
  )
}

export default Project

interface ProjectPath {
  slug: string
  locale: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en', 'es'] }) => {
  const rawPaths = (await Promise.all(locales.map(async (locale) => {
    const query = `
                query ProjectsPath {
                  projects(locales: ${locale}) {
                    slug
                    locale
                  }
                }
              `
    const { projects } = await graphQLFetch<{ projects: ProjectPath[] }>(query)
    return projects
  }))).flat()
  const paths = rawPaths.map((path) => ({
    params: { slug: path.slug },
    locale: path.locale
  }))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

interface Project {
  id: string
  title: string
  content: string
  stack: string
  tools: [{
    tools: string[]
  }]

  updatedAt: string
  demo?: string
  github?: string
  image: {
    url: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en' }) => {
  try {
    let slug = ''
    if (typeof params?.slug === 'string' && typeof params?.locale) slug = params?.slug
    const query = `
  query Projects {
    projects(locales: ${locale}, where: {slug: ${JSON.stringify(slug)}}) {
      id
      title
      content
      stack
      tools
      updatedAt
      github
      demo
      image {
        url
      }
    }
  }
  `
    const { projects } = await graphQLFetch<{ projects: Project[] }>(query)
    return {
      props: { project: projects[0] }
    }
  }
  catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}

