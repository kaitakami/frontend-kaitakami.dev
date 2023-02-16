import React from 'react'
import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { GetStaticPaths } from 'next'
import { graphQLFetch } from '@/utils/graphQLFetch'
import HeadLayout from '@/components/Layout/Head'
import Animate from '@/components/Layout/Animate'
import Layout from '@/components/Layout/Layout'
import { marked } from 'marked'

const BlogPage: NextPage<{ blog: Blog }> = ({ blog }) => {
  const MDX = marked(blog.content)
  const publishedDate = new Date(blog.updatedAt).toDateString()
  return (
    <>
      <HeadLayout title={blog.title} />
      <Animate>
        <>
          <Layout>
            <>
              <div className="max-w-2xl px-5 md:px-0 m-auto flex flex-col gap-6">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <span className='border w-fit rounded-sm border-white/5 px-4 py-3 transition-all group-hover:bg-zinc-800 text-gray-200'>/{blog.category.name}</span>
                <p className='text-sm text-gray-400'>{publishedDate}</p>
                <hr className='border-gray-800' />
                <div className='mdx flex gap-3 flex-col' dangerouslySetInnerHTML={{ __html: MDX }} />
              </div>
            </>
          </Layout>
        </>
      </Animate>
    </>
  )
}

export default BlogPage

interface BlogPath {
  category: {
    slug: string
  }
  slug: string
  locale: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en', 'es'] }) => {
  const rawPaths = (await Promise.all(locales.map(async (locale) => {
    const query = `
                query Blog {
                  blogs(locales: ${locale}) {
                    category {
                      slug
                    }
                    slug
                    locale
                  }
                }
              `
    const { blogs } = await graphQLFetch<{ blogs: BlogPath[] }>(query)
    return blogs
  }))).flat()

  const paths = rawPaths.map((path) => ({
    params: { category: path.category.slug, id: path.slug },
    locale: path.locale
  }))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

interface Blog {
  category: {
    name: string
  }
  updatedAt: string
  title: string
  content: string
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en' }) => {
  try {
    let slug = ''
    if (typeof params?.id === 'string' && typeof params?.locale) slug = params?.id
    const query = `
  query Blog {
    blogs(locales: ${locale}, where: {slug: ${JSON.stringify(slug)}}) {
      category {
        name
      }
      updatedAt
      title
      content
    }
  }
  `
    const { blogs } = await graphQLFetch<{ blogs: Blog[] }>(query)
    return {
      props: { blog: blogs[0] }
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





