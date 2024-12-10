import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = React.forwardRef(({ isVisible }, ref) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      id="projects"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      <h1>Projects</h1>
      <div className="w-full max-w-4xl">
        <Carousel responsive={responsive} className="w-full h-auto">
          <div className="flex items-center justify-center bg-gray-200 h-32">
            <h3>Item 1</h3>
          </div>
          <div className="flex items-center justify-center bg-gray-200 h-32">
            <h3>Item 2</h3>
          </div>
          <div className="flex items-center justify-center bg-gray-200 h-32">
            <h3>Item 3</h3>
          </div>
          <div className="flex items-center justify-center bg-gray-200 h-32">
            <h3>Item 4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
});

export default Projects;
