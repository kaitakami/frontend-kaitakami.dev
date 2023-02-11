import Link from 'next/link'
import HeadLayout from '@/components/Layout/Head'
const NotFoundPage = () => {
  return (
    <>
      <HeadLayout title='Error 404 :(' />
      <main className="grid min-h-screen place-items-center py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-semibold bg-gradient-to-tl from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent font">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-300">The page you&apos;re looking for doesn&apos;t exist yet.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-gradient-to-tl from-indigo-600 to-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link href="/#contact" className="text-sm font-semibold text-gray-200">
              Contact me <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
