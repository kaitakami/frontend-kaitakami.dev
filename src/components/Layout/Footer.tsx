import Link from "next/link"

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 p-4 rounded-lg shadow md:px-6 md:py-8 bg-[#222222]">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kai Takami</Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://linkedin.com/in/kaitakami/" className="mr-4 hover:underline md:mr-6" target='_blank' rel="noreferrer">Hire me</a>
          </li>
          <li>
            <a href="https://cal.com/kaitakami/" className="mr-4 hover:underline md:mr-6" target='_blank' rel="noreferrer">Talk with me</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© Kai Takami. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
