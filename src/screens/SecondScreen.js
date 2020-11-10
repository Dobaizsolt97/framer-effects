import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondScreen = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: "-100vh", transition: { duration: 0.5 } }}
      className="standard second"
    >
      <div className="full-cont">
        <motion.div
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          drag
          className="img-cont"
        ></motion.div>
        <div className="second-img"></div>
        <div className="text-cont">
          <h1>Behind a successful man </h1>
          <h1>is a great woman</h1>
          <h2>If you do not belive me</h2>
          <h2>Drag and see for youreself</h2>
          <h3>{"<------"}</h3>
          <Link to="/third">
            <Button className="my-3 mx-5" variant="dark">
              Tell me more
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondScreen;
