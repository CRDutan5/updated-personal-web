import React from "react";

const Nav = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed max-md:hidden top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">{""}</h1>
        <div className="flex gap-8 text-lg text-white">
          <div>
            <h1
              className="cursor-pointer hover:text-blue-200 transition-all duration-300"
              onClick={() => handleScroll("landing")}
            >
              Home
            </h1>
          </div>
          <div>
            <h1
              className="cursor-pointer hover:text-blue-200 transition-all duration-300"
              onClick={() => handleScroll("technical")}
            >
              Skills
            </h1>
          </div>
          <div>
            <h1
              className="cursor-pointer hover:text-blue-200 transition-all duration-300"
              onClick={() => handleScroll("education")}
            >
              Education
            </h1>
          </div>
          <div>
            <h1
              className="cursor-pointer hover:text-blue-200 transition-all duration-300"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
