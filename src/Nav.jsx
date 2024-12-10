import React from "react";

const Nav = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <div className="mt-12 flex justify-evenly text-xl font-bold max-md:hidden">
    <div className="pt-6 text-strongblue flex justify-end gap-10 text-2xl max-sm:hidden">
      <div>
        <h1 className="border-b-4 border-transparent cursor-pointer hover:border-blue-600 transition-all duration-300">
          Home
        </h1>
      </div>
      <div className="">
        <h1
          className="border-b-4 border-transparent cursor-pointer hover:border-blue-600 transition-all duration-300"
          onClick={() => handleScroll("technical")}
        >
          Skills
        </h1>
      </div>
      <div>
        <h1
          className="border-b-4 border-transparent cursor-pointer hover:border-blue-600 transition-all duration-300"
          onClick={() => handleScroll("education")}
        >
          Education
        </h1>
      </div>
      <div>
        <h1
          className="border-b-4 border-transparent cursor-pointer mr-10 hover:border-blue-600 transition-all duration-300"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Nav;
