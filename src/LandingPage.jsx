import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the component
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the GitHub icon
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const LandingPage = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      id="landing"
      ref={ref}
      className={`min-h-screen flex flex-col items-center md:mt-16 justify-center px-4 transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] px-4 max-w-screen-lg animate-fade-left animate-run animate-ease-out animate-duration-700 mb-12">
        <div className="flex flex-col justify-start">
          <h1 className="text-center text-5xl md:text-left md:text-6xl text-gray-800 font-bold">
            Carlitos Dutan
          </h1>
          <p className="text-center text-blue-600 text-3xl md:text-left md:text-4xl py-2 font-semibold">
            Software Engineer
          </p>
          <p className="text-center text-slate-800 text-xl pb-4 md:text-left md:text-2xl font-light">
            I’m passionate about using technology to bring creative ideas to
            life. I focus on building innovative solutions and exploring new
            ways to push the boundaries of what’s possible in software
            development.
          </p>
          <div className="flex justify-center md:justify-start">
            <div className="rounded-xl flex space-x-6 max-w-full mb-6">
              <a
                href="https://github.com/crdutan5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/carlitosdutan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                />
              </a>
              <a
                href="mailto:carlitosrdutan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGgLVs0vgJWQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727713654350?e=1739404800&v=beta&t=Mc7THVaNPQrqGF--cuxqIvJEKKsFsMfHFiOZw5WAl30"
            alt="Profile"
            className="shadow-4xl md:mb-16"
          />
        </div>
      </div>
    </div>
  );
});

export default LandingPage;
