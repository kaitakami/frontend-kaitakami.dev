import Link from "next/link"
import HeadLayout from "@/components/Layout/Head"
import Animate from "@/components/Layout/Animate"
import Layout from "@/components/Layout/Layout"
const Project = () => {
  return (
    <>
      <HeadLayout title="Projects" />
      <Animate>
        <>
          <Layout>
            <>
              <div className="max-w-2xl px-5 md:px-0 m-auto flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Project</h1>
                <p>This website is still in construction :)</p>
                <Link href="/">Go back</Link>
              </div>
            </>
          </Layout>
        </>
      </Animate>
      </>
  )
}

export default Project
