import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";

const languages = [
  {
    icon: react,
    name: "Python",
    level: "80",
  },
  {
    icon: react,
    name: "JavaScript",
    level: "70",
  },
  {
    icon: react,
    name: "React",
    level: "60",
  },
  {
    icon: react,
    name: "html",
    level: "60",
  },
  {
    icon: react,
    name: "css",
    level: "60",
  },
  {
    icon: react,
    name: "sklearn",
    level: "70",
  },
];

const tools = [
  {
    icon: react,
    name: "Jupyter Notebook",
    level: "85",
  },
  {
    icon: react,
    name: "Spyder",
    level: "80",
  },
  {
    icon: react,
    name: "VS Code",
    level: "80",
  },
  {
    icon: react,
    name: "Pycharm",
    level: "80",
  },
  // {
  //     icon: react,
  //     name: "VS Code",
  //     level:"60",
  // },
  // {
  //     icon: react,
  //     name: "VS Code",
  //     level:"60",
  // },
];

const Resume = () => {
  const resume_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        dealy: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume__card">
          <h4 className="resume__card__heading">Education</h4>
          <div className="resume__card__body">
            <h5 className="resume__card__title">
              Electronics and Telecommunicaton Engineering
            </h5>
            <p className="resume__card__name">
              Smt Kashibai Navale College Of Engineering(2017-2021)
            </p>
            <p className="resume__card__details">
              {" "}
              currently I have finished BE in Electronics and Telecommunicaton
              Engineering from Smt Kashibai Navale College Of Engineering
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume__card">
          <h4 className="resume__card__heading">Internship/Cource</h4>

          <div className="resume__card__body">
            <h5 className="resume__card__title"> Data Science using Python</h5>
            <p className="resume__card__name">Tech Smart Systems</p>
            <a
              href="https://drive.google.com/drive/folders/1lMZ49rnLRMqhNnBVK5IIiWcyMjlKAApu?usp=sharing"
            >
              <p>Certificate</p>
            </a>
            <p className="resume__card__details">
              Deep Learning with Keras and Tensorflow in Python
            </p>
            <a
              href="https://www.udemy.com/certificate/
              UC-a9c55b07-f6f0-4bca-88aa9e39323f4437"
            >
              <p>Certificate</p>
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Framework</h5>
          <div className="resume-language__body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>

        {/* ------------------------------------------- */}

        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Software</h5>
          <div className="resume-language__body">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
