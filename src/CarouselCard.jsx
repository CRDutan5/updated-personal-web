import React from "react";

const CarouselCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain" // This prevents image from being squeezed
        />
      </div>

      {/* Card Content Section */}
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="text-lg text-gray-700 mt-2">{project.about}</p>
        <p className="mt-4 text-gray-600 font-light text-sm">
          {project.techstack}
        </p>

        {/* Links */}
        <div className="mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {/* {project.website && <span className="mx-2">|</span>} */}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
