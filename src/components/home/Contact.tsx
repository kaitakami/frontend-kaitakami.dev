import { motion } from "framer-motion"
import { IconBrandTwitter } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"
import { IconBrandGithub } from "@tabler/icons-react"
import { IconBrandZoom } from "@tabler/icons-react"

const Contact = () => {
  const socials = [
    { name: 'twitter', link: "https://twitter.com/kaitakami_", logo: <IconBrandTwitter className="w-12 h-12 md:w-20 md:h-20" stroke={1.4} /> },
    { name: 'linkedin', link: "https://www.linkedin.com/in/kaitakami/", logo: <IconBrandLinkedin className="w-12 h-12 md:w-20 md:h-20" stroke={1.5} /> },
    { name: 'github', link: "https://github.com/kaitakami/", logo: <IconBrandGithub className="w-12 h-12 md:w-20 md:h-20" /> },
    { name: 'cal', link: "https://cal.com/kaitakami/", logo: <IconBrandZoom className="w-12 h-12 md:w-20 md:h-20" /> },
  ]


  return (
    <>
      <p className='my-auto px-3 z-10 text-xl text-white/80 w-fit pb-20'>Feel free to contact me ⚛️</p>
      <div className='flex flex-wrap justify-center gap-8 overflow-auto p-3'>
        {socials.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-transparent shadow-xl ring-1 ring-slate-200/10 transition-all duration-300 hover:shadow-2xl sm:rounded-lg hover:scale-105">
              <div className="text-slate-300 sm:p-10 p-8 md:p-12 lg:p-14 transition-all duration-300 group-hover:text-white/90 flex justify-between flex-col h-full">
                <div className="m-auto">
                  {social.logo}
                </div>
              </div>
            </motion.div>
          </a>
        ))}

      </div>
    </>

  )
}

export default Contact
