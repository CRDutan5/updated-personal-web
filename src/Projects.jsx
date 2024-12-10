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
        "https://s.yimg.com/ny/api/res/1.2/53o6K34g4Z5eAoBoPsNZUg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/creative_bloq_161/87fefa9e5a05f4e3b07c88f2fe805fcc",
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
      github:
        "https://github.com/ArmandoPires103/TutorLink-Frontend/blob/main/public/TutorLink.png?raw=true",
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
      <div className="border-b-blue-600 border-b-4">
        <h1 className="text-center text-5xl md:text-left md:text-6xl">
          Projects
        </h1>
      </div>
      <div className="max-w-screen-lg my-8 mx-8">
        <p className="text-xl md:text-2xl text-center font-extralight">
          As a software engineer, I've developed a diverse portfolio of projects
          that showcase my skills in full-stack development, problem-solving,
          and innovative thinking. My work includes:
        </p>
      </div>
      <div className="w-full max-w-7xl my-8">
        <Carousel responsive={responsive} className="w-full">
          {projectInfo.map((project, index) => (
            <div
              className="flex items-center justify-center bg-main"
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
