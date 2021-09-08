import React from "react";
import github from "../assets/icons/github.svg"

const ProjectCard = ({project:{name, image, github_url,category}}) => {
  return (
    <div className="projectCard col-md-6 col-lg-4">
      <figure className="projectCard__wrapper">
          <a href={github_url}>
              <img src={image} alt="url" className="projectCard__image" />
          </a>

          <div className="projectCard__title">
          <a href={github_url} target="_blank">
              <img src={github} alt="github" className="projectCard__icon" />
              {name}
          </a>
          
          </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
