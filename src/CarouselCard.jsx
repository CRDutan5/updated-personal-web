import React from "react";

const CarouselCard = ({ project }) => {
  return (
    <div className="flex flex-col min-h-fit">
      <div>
        <img src={project.image} className="w-full h-72 object-cover" alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-3xl md:text-4xl border-blue-400 border-b-4">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl py-2">
          <span className="font-bold text-blue-600">TechStack: </span>
          {project.techstack}
        </p>
        <p className=" font-light">{project.about}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
