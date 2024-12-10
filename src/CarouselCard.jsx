import React from "react";

const CarouselCard = ({ project }) => {
  return (
    <div className="flex flex-col">
      <h1>{project.title}</h1>
      <img src={project.image} className="h-72" alt="" />
    </div>
  );
};

export default CarouselCard;
