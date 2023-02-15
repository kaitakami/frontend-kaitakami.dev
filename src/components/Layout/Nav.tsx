import { useState, useEffect } from "react";
import { AnimatePresence, motion, useCycle, useScroll } from "framer-motion";
import Link from "next/link";
import { IconGhost, IconGhostOff } from "@tabler/icons-react";

const links = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Projects", to: "/project" },
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
const Nav = ({ delay = 0 }) => {
  const { scrollY } = useScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.get() <= scrollY?.getPrevious() + 1) {
      setHidden(false);
    } else if (scrollY?.get() >= 100 && scrollY?.get() >= scrollY?.getPrevious()) {
      setHidden(true);
      if (open) {
        cycleOpen()
      }
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };

  //

  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay }}
    >
      <motion.nav /** the variants object needs to be passed into the motion component **/
        variants={variants}
        viewport={{ once: true }}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        /** basic nav styles **/
        className="flex fixed left-0 h-screen z-30"
      >
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
              }}
              className="bg-[#222229] h-screen left-0 top-0"
            >
              <motion.div
                className="absolute top-0 flex flex-col pt-24 pl-8 gap-6"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className="text-3xl font-bold block"
                  >
                    <Link href={to}>
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.nav >
      <div className="fixed z-30">
        <button className="p-8" onClick={() => cycleOpen()}>{open ? <IconGhostOff size={30} /> : <IconGhost size={30} />}</button>
      </div>
    </motion.div>

  )
}

export default Nav

