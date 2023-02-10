import React from 'react'
import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import type { GetStaticPaths } from 'next'
import { graphQLFetch } from '@/utils/graphQLFetch'

const BlogPage: NextPage<{ blog: Blog }> = ({ blog }) => {
  const publishedDate = new Date(blog.updatedAt).toDateString()
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{publishedDate}</p>
      <p>{blog.category.name}</p>
      <hr />
      <p>
        {blog.content}
      </p>
      aaaa
    </div>
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

  console.log(rawPaths)

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





