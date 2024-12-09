import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Projects = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      <h1>Projects</h1>
      <ProjectCarousel />
    </div>
  );
});

export default Projects;
