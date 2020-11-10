import React from "react";

import { motion } from "framer-motion";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const divVariants = {
  exit: { x: "-100vw", transition: { duration: 0.5 } },
  initial: { y: "-100vh" },
  animate: { y: 0, transition: { duration: 0.5 } },
};
const cardVariants = {
  initial: { backgroundColor: "white", rotate: 0, opacity: 0 },
  animate: {
    backgroundColor: "white",
    opacity: 1,
    rotate: -2,
    transition: { delay: 1, duration: 1 },
  },
  while: {
    rotate: 10,
    transition: { duration: 1 },
  },
};
const buttonVariants = {
  initial: {},
  animate: {
    textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
    transition: {
      yoyo: Infinity,
    },
  },
};
const FirstScreen = () => {
  return (
    <motion.div
      className="first standard"
      variants={divVariants}
      exit="exit"
      animate="animate"
      initial="initial"
    >
      <motion.Card
        variants={cardVariants}
        whileHover="while"
        className="my-3 p-3 rounded card"
      >
        <Card.Img src="https://imgur.com/zwBPzg5.jpg" variant="top"></Card.Img>

        <Card.Body>
          <Card.Title as="div">
            <strong>Nike Air</strong>
          </Card.Title>

          <Card.Text as="div">Newest addition</Card.Text>
          <Card.Text as="h3">Get them now</Card.Text>
        </Card.Body>
      </motion.Card>
      <motion.Card
        variants={cardVariants}
        whileHover="while"
        className="my-3 p-3 rounded card"
      >
        <Card.Img src="https://imgur.com/dCxrH2M.jpg" variant="top"></Card.Img>

        <Card.Body>
          <Card.Title as="div">
            <strong>Vans</strong>
          </Card.Title>

          <Card.Text as="h3">Last pair</Card.Text>
        </Card.Body>
      </motion.Card>
      <motion.Card
        variants={cardVariants}
        whileHover="while"
        className="my-3 p-3 rounded card"
      >
        <Card.Img src="https://imgur.com/fTIlNJu.jpg" variant="top"></Card.Img>

        <Card.Body>
          <Card.Title as="div">
            <strong>Running shoes</strong>
          </Card.Title>

          <Card.Text as="div">New collection</Card.Text>
          <Card.Text as="h3">See more</Card.Text>
        </Card.Body>
      </motion.Card>
      <Link to="/second">
        <motion.button variants={buttonVariants} className="roundedBtn">
          I want more
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FirstScreen;
