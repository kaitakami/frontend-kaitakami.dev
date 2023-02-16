import { useState } from "react"
import { motion } from "framer-motion"
import Animate from "@/components/Layout/Animate"
import { graphQLFetch } from "@/utils/graphQLFetch"
import HeadLayout from "@/components/Layout/Head"
import Layout from "@/components/Layout/Layout"
import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"

interface Category {
  name: string
  id: string
  slug: string
}

interface Blog {
  id: string
  title: string
  description: string
  category: Category
  slug: string
  publishedAt: string
}

const Blog: NextPage<{ blogs: Blog[], categories: Category[] }> = ({ blogs, categories }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleFilterChange = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      setFilteredBlogs(blogs)
    } else {
      setSelectedCategory(category)
      const filtered = blogs.filter(blog => blog.category.id === category)
      setFilteredBlogs(filtered)
    }
  }

  return (
    <>
      <HeadLayout title="Blog" />
      <Animate>
        <>
          <Layout>
            <>
              <div className="max-w-2xl px-5 md:px-0 m-auto flex flex-col gap-6 space-y-5">
                <h1 className="text-6xl font-bold">Blog</h1>
                {/* Filter blogs by category */}
                <form className="flex gap-3 px-3 flex-col sm:flex-row flex-wrap">
                  {categories.map(category => (
                    <div key={category.id} className="flex gap-2">
                      <input
                        className="h-3 w-3 appearance-none rounded-full ring-2 ring-gray-600 checked:bg-gray-500 my-auto"
                        type="checkbox"
                        id={category.id}
                        name={category.id}
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => handleFilterChange(category.id)} />
                      <label htmlFor={category.id} className="capitalize my-auto">{category.name}</label>
                    </div>
                  ))}
                </form>
                <hr className='border-gray-800' />
                <div className="flex flex-wrap gap-7 justify-between pb-20">
                  {/* Display filtered blogs */}
                  {filteredBlogs.map((blog, index) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.category.slug}/${blog.slug}`}
                      className="max-w-2xl w-full m-auto relative"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0 + (index / 35) }}
                        className="group bg-transparent px-6 pb-8 shadow-xl ring-1 ring-slate-200/10 transition-all duration-300 hover:shadow-2xl sm:rounded-lg sm:px-10 hover:scale-105 py-3">
                        <div className="pt-5 text-base leading-7 text-slate-300 transition-all duration-300 group-hover:text-white/90 flex justify-between flex-col h-full space-y-8">
                          <div className="space-y-2">
                            <h1 className="font-bold text-xl text-white drop-shadow-2xl">{blog.title}</h1>
                            <p className='truncate'>{blog.description}</p>
                          </div>
                          <div className='capitalize'>
                            <span className='border rounded-sm border-white/5 px-4 py-3 transition-all group-hover:bg-zinc-800'>/{blog.category.name}</span>
                          </div>
                          <p className='truncate text-sm absolute right-0 bottom-0 p-5 text-gray-500'>{new Date(blog.publishedAt).toDateString()}</p>
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

export default Blog

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale ||= 'en'
  const query = `
    query Blogs {
      blogs(orderBy: publishedAt_DESC ,locales: ${locale}) {
        id
        title
        description
        category {
          name
          id
          slug
        }
        slug
        publishedAt
      }
      categories(locales: ${locale}) {
        name
        id
        slug
      }
    }
  `
  const { blogs, categories } = await graphQLFetch<{ blogs: Blog[], categories: Category[] }>(query)

  return {
    props: {
      blogs,
      categories
    },
    revalidate: 3600 * 24
  }
}




