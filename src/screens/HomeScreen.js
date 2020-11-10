import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const h1Variants = {
  initial: { x: "100vw" },
  animate: { x: 0, transition: { duration: 1, delay: 0.5 } },
};
const h2Variants = {
  initial: { x: "-100vw" },
  animate: {
    x: 0,
    transition: { duration: 1, type: "spring", damping: 6, delay: 0.5 },
  },
};
const divVariants = {
  exit: { x: "-100vw", transition: { duration: 0.5 } },
  initial: { x: "100vw" },
  animate: { x: 0, transition: { duration: 0.5 } },
};
const buttonVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 3 },
  },
};

const HomeScreen = () => {
  return (
    <motion.div
      className="home standard"
      variants={divVariants}
      exit="exit"
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={h1Variants} animate="animate" initial="initial">
        Let's explore
      </motion.h1>
      <motion.h2 variants={h2Variants}>Framer Motion</motion.h2>
      <Link to="/first">
        <motion.button variants={buttonVariants} className="roundedBtn">
          Go go go
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default HomeScreen;
