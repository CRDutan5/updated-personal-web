import React from "react";

const Education = React.forwardRef(({ isVisible }, ref) => {
  //   console.log(isVisible);
  /*
The program provides in-depth training in web development
                technologies, focusing on practical skills in JavaScript, HTML,
                CSS, React, PostgreSQL, Test Driven Development, and deployment
                with ElephantSQL. Through hands-on projects and collaboration,
                it prepares participants for real-world software engineering
                challenges by fostering problem-solving abilities, teamwork, and
                adherence to industry best practices.


                I gained a strong foundation in both computer science and
                cybersecurity. The program equipped me with skills in software
                development, network security, and digital forensics, preparing
                me for a career at the intersection of technology and security.
  */
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
      ref={ref}
    >
      <h1>Education</h1>
      <div>
        <h1>John Jay College</h1>
      </div>
      <div>
        <h1>Pursuit Fellowship</h1>
      </div>
    </div>
  );
});

export default Education;
