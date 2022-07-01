import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};
const animationsNavbar = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
const animationsInput = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:1.5}}
    >
      {children}
    </motion.div>
  );
}

function AnimatedNavbar({ children }){
    return (
        <motion.div
          variants={animationsNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{duration:1.5}}
        >
          {children}
        </motion.div>
      );
}
function AnimatedInput({ children }){
    return (
        <motion.div
          variants={animationsInput}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{duration:1.5}}
        >
          {children}
        </motion.div>
      );
}

export {AnimatedNavbar,AnimatedInput}

export default AnimatedPage;
