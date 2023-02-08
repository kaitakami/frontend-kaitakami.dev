import { motion } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Animate = ({ children }: Props) => (
  <motion.div
    variants = {variants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{
      type: "linear",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Animate;
