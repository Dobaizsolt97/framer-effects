import React from "react";
import { motion } from "framer-motion";

const DefaultScreen = () => {
  return (
    <motion.div
      className="default standard"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
    >
      404
    </motion.div>
  );
};

export default DefaultScreen;
