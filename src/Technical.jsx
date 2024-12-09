import React, { useEffect, useRef, useState } from "react";

const Technical = () => {
  const [isVisible, setIsVisible] = useState(false);
  const technicalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (technicalRef.current) {
      observer.observe(technicalRef.current);
    }

    return () => {
      if (technicalRef.current) {
        observer.unobserve(technicalRef.current);
      }
    };
  }, []);

  return (
    <div
      id="technical"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="border-b-blue-600 border-b-4">
        <h1 className="text-6xl">Skills</h1>
      </div>
      <div className="max-w-screen-lg my-8">
        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet
          aspernatur repellendus? Laboriosam inventore praesentium nesciunt iste
          architecto tempora suscipit adipisci maxime, numquam sequi iusto! Ad
          corrupti amet placeat quibusdam?
        </p>
      </div>
      <div className="w-full max-w-screen-xl p-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-16">
        <div className="animate-fade-left rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4">
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-4xl text-main text-center">Languages</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Javascript</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
              alt="JavaScript"
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Python</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Python.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">PostgreSQL</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">HTML</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center pb-4">
            <p className="text-xl mr-2">CSS</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/CSS3.svg "
              alt=""
              width="40"
              height="40"
            />
          </div>
        </div>
        {/* /////////////////////// */}
        {/* Languages: Javascript, Python, HTML, CSS, PostgreSQL
Frameworks/Libraries: React, Node.js, Express.js, Bootstrap, TailwindCSS, JWT, Bcrypt Developer Tools: Postman, Git, GitHub, NPM, Firebase, ElephantSQL */}

        {/* Missing JWT, Bcrypt, ElephantSQL */}
        <div className="animate-fade-left rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4">
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-4xl text-main text-center">
              Frameworks & Libraries
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">React.js</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt="JavaScript"
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Node.js</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Express.js</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Express.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Flask</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Flask.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Pandas</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Pandas.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Bootstrap</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Bootstrap.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">TailwindCSS</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center pb-4">
            <p className="text-xl mr-2">Vite.js</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
        </div>
        {/* Devvvv */}
        {/* Dev */}
        <div className="animate-fade-left rounded-3xl shadow-[-28px_40px_38px_7px_rgba(0,_0,_0,_0.1)] flex flex-col gap-y-4">
          <div className="bg-blue-600 rounded-t-xl p-8">
            <h1 className="text-4xl text-main text-center">Developer Tools</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Postman</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Postman.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Git</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Git.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">Github</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/GitHub.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-xl mr-2">NPM</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/NPM.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <div className="flex items-center justify-center pb-4">
            <p className="text-xl mr-2">Firebase</p>
            <img
              src="https://icon.icepanel.io/Technology/svg/Firebase.svg"
              alt=""
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
