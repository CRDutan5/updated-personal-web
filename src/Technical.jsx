import React, { useEffect, useRef, useState } from "react";

const Technical = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      id="technical"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center mb-12${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      <div className="border-b-blue-600 border-b-4 mb-8">
        <h1 className="text-center text-5xl md:text-left md:text-6xl font-semibold">
          Skills
        </h1>
      </div>
      <div className="max-w-screen-lg my-8 mx-8">
        <p className="text-xl md:text-2xl text-center font-light leading-relaxed">
          A collection of the tools, languages, and frameworks that I use to
          turn creative ideas into functional and efficient software.
        </p>
      </div>
      <div className="w-full max-w-screen-xl p-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* Languages */}
        <div
          className={`rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4 ${
            isVisible && "animate-fade-up"
          }`}
        >
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-2xl md:text-3xl text-main text-center font-bold">
              Languages
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Javascript</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
                alt="JavaScript"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Python</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Python.svg"
                alt="Python"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">PostgreSQL</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="PostgreSQL"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">HTML</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
                alt="HTML5"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 pb-4">
              <p className="text-xl md:text-2xl">CSS</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
                alt="CSS3"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div
          className={`rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4 ${
            isVisible && "animate-fade-up"
          }`}
        >
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-2xl md:text-3xl text-main text-center font-bold">
              Frameworks & Libraries
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">React.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="React.js"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Node.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
                alt="Node.js"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Express.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Express.svg"
                alt="Express.js"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Flask</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Flask.svg"
                alt="Flask"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Pandas</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Pandas.svg"
                alt="Pandas"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Bootstrap</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Bootstrap.svg"
                alt="Bootstrap"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">TailwindCSS</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt="TailwindCSS"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 pb-4">
              <p className="text-xl md:text-2xl">Vite.js</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"
                alt="Vite.js"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div
          className={`rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4 ${
            isVisible && "animate-fade-up"
          }`}
        >
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-2xl md:text-3xl text-main text-center font-bold">
              Developer Tools
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Postman</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Postman.svg"
                alt="Postman"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Git</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Git.svg"
                alt="Git"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">Github</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/GitHub.svg"
                alt="Github"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl md:text-2xl">NPM</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/NPM.svg"
                alt="NPM"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 pb-4">
              <p className="text-xl md:text-2xl">Firebase</p>
              <img
                src="https://icon.icepanel.io/Technology/svg/Firebase.svg"
                alt="Firebase"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Technical;
