import React from "react";

const Education = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      className={` min-h-screen flex flex-col items-center justify-center ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
      ref={ref}
      id="education"
    >
      <div className="border-b-blue-600 border-b-4">
        <h1 className="text-center text-5xl md:text-left md:text-6xl">
          Education
        </h1>
      </div>
      <div className="w-full max-w-screen-xl p-8 gap-y-8 grid grid-cols-1 md:grid-cols-1 gap-x-8">
        <div
          className={`bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 border-8 border-blue-600 p-8 rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] ${
            isVisible && "animate-fade-up"
          }`}
        >
          <h1 className="text-3xl md:text-4xl">
            John Jay College of Criminal Justice
          </h1>
          <h2 className="text-blue-600 text-xl md:text-left md:text-2xl">
            Bachelor of Science in Computer Science and Information Security
          </h2>
          <h3 className="md:text-xl text-lg">August 2019 - May 2024</h3>
          <p className="text-lg md:text-xl font-extralight">
            I gained a strong foundation in both computer science and
            cybersecurity. The program equipped me with skills in software
            development, network security, and digital forensics, preparing me
            for a career at the intersection of technology and security.
          </p>
        </div>
        <div
          className={`bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 border-8 border-blue-600 p-8 rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] ${
            isVisible && "animate-fade-up"
          }`}
        >
          <h1 className="text-3xl md:text-4xl">Pursuit Fellowship</h1>
          <h2 className="text-blue-600 text-xl md:text-left md:text-2xl">
            Full Stack Development
          </h2>
          <h3 className="md:text-xl text-lg">July 2023 - Present</h3>
          <p className="text-lg md:text-xl font-extralight">
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
