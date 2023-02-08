import Link from "next/link"
import Animate from "@/components/Layout/Animate"

const blog = () => {
  return (
    <>
      <Animate>
        <>
          <div>This is the blog</div>
          <Link href="/">Go back</Link>
        </>
      </Animate>
    </>
  )
}

export default blog
