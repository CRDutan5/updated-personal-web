import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define responsive settings for different screen sizes
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5, // Number of items for super large desktop
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Number of items for desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Number of items for tablet
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Number of items for mobile
  },
};

const ProjectCarousel = () => {
  return (
    <div>
      <h1>Project Carousel</h1>
      <Carousel responsive={responsive}>
        {/* Nest your project content here */}
        <div>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        <div>
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
        </div>
        <div>
          <h3>Project 4</h3>
          <p>Description of Project 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
