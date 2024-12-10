import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./CarouselCard";

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

  const projectInfo = [
    {
      title: "FPL Analyzer",
      about:
        "The Fantasy Premier League (FPL) Analyzer helps FPL managers optimize team performance with data-driven insights. It analyzes over 600 players, offering weekly statistics, personalized recommendations, automated email updates, and efficient logging for smooth performance, making it a valuable resource for FPL enthusiasts.",
      image:
        "https://logodownload.org/wp-content/uploads/2016/03/premier-league-5.png",
      website: null,
      github: "https://github.com/CRDutan5/fpl-project-v2",
      techstack: "Python, Flask, Pandas, SMTP, Launchd, FPL API",
    },
    {
      title: "H2H",
      about:
        "H2H is your ultimate app for finding teammates, creating matches, and elevating your basketball experience. Our platform simplifies the process of building teams and setting up games, helping you reconnect with the thrill of competitive sports.",
      techstack:
        "JavaScript, HTML, CSS, React, PostgreSQL, Express.js, Firebase, NYC Parks API",
      image:
        "https://res.cloudinary.com/dwygxzqku/image/upload/v1722631715/H2H/h2h-logos/H2H-Logo_jnhf5q.png",
      website: "https://head2head.netlify.app/",
      github: null,
    },
    {
      title: "TutorLink",
      about:
        " TutorLink offers personalized learning experiences tailored to individual needs, empowering students to achieve their academic goals. With a diverse network of qualified tutors, TutorLink ensures quality education accessible to all.",
      techstack: "JavaScript, HTML, CSS, React, PostgreSQL, Express.js, JWT",
      image:
        "https://github.com/ArmandoPires103/TutorLink-Frontend/blob/main/public/TutorLink.png?raw=true",
      website: null,
      github: "https://github.com/ArmandoPires103/TutorLink-Frontend",
    },
  ];

  return (
    <div
      id="projects"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-wider uppercase">
          Projects
        </h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-screen-lg mx-8 mt-4 mb-8 text-center">
        <p className="text-xl md:text-2xl font-light text-gray-700">
          As a software engineer, I've developed a diverse portfolio of projects
          that showcase my skills in full-stack development, problem-solving,
          and innovative thinking. My work includes:
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full bg-white">
        <Carousel
          responsive={responsive}
          className="w-full shadow-lg rounded-xl"
        >
          {projectInfo.map((project, index) => (
            <div
              className="flex items-center justify-center bg-white bg-opacity-80 border-t-4 border-blue-600 p-8 rounded-lg"
              key={index}
            >
              <CarouselCard project={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
});

export default Projects;
