import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    let cur = window.location.href;
    console.log(cur);
    if (cur.endsWith("/")) {
      setActive("About");
    } else if (cur.endsWith("projects")) {
      setActive("Projects");
    } else if (cur.endsWith("resume")) {
      setActive("Resume");
    }
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
    },
    transition: {
      dealy: 0.2,
      duration: 0.7,
      type: "spring",
    },
    exit:{
      opacity:0,
      transition:{
          ease: 'easeInOut'
      }
  }
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        ) : null}

        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
