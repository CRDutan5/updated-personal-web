import React from "react";

const Education = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      className={`min-h-screen my-16 flex flex-col items-center justify-center ${
        isVisible && "animate-fade-left"
      }`}
      ref={ref}
      id="education"
    >
      {/* Education Heading Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-wider uppercase">
          Education
        </h1>
      </div>
      <div className="max-w-screen-lg my-8 mx-8">
        <p className="text-xl md:text-2xl text-center font-light leading-relaxed">
          Where I built the foundation of my software development career,
          combining rigorous academic training in college with practical,
          hands-on experience during my fellowship.
        </p>
      </div>

      {/* Education Content */}
      <div className="w-full max-w-screen-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* John Jay College Section */}
        <div
          className={`bg-white bg-opacity-80 border-t-4 border-blue-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isVisible ? "animate-fade-up" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            John Jay College of Criminal Justice
          </h2>
          <h3 className="text-blue-600 text-xl font-medium mb-2">
            Bachelor of Science in Computer Science and Information Security
          </h3>
          <h4 className="text-lg text-gray-500 mb-4">August 2019 - May 2024</h4>
          <p className="text-lg text-gray-700 font-light">
            I gained a strong foundation in both computer science and
            cybersecurity. The program equipped me with skills in software
            development, network security, and digital forensics, preparing me
            for a career at the intersection of technology and security.
          </p>
        </div>

        {/* Pursuit Fellowship Section */}
        <div
          className={`bg-white bg-opacity-80 border-t-4 border-blue-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isVisible ? "animate-fade-up" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pursuit Fellowship
          </h2>
          <h3 className="text-blue-600 text-xl font-medium mb-2">
            Full Stack Development
          </h3>
          <h4 className="text-lg text-gray-500 mb-4">July 2023 - Present</h4>
          <p className="text-lg text-gray-700 font-light">
            The program provides in-depth training in web development
            technologies, focusing on practical skills in JavaScript, HTML, CSS,
            React, PostgreSQL, Test Driven Development, and deployment with
            ElephantSQL. Through hands-on projects and collaboration, it
            prepares participants for real-world software engineering challenges
            by fostering problem-solving abilities, teamwork, and adherence to
            industry best practices.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Education;
