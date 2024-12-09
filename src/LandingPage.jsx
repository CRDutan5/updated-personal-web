import React from "react";

const LandingPage = React.forwardRef(({ isVisible }, ref) => {
  return (
    <div
      id="landing"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ease-in ${
        isVisible ? "opacity-100 animate-fade-left" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] px-4 max-w-screen-lg animate-fade-left animate-run animate-ease-out animate-duration-700 mb-12">
        <div className="flex flex-col justify-start">
          <h1 className="text-center text-5xl md:text-left md:text-7xl">
            Carlitos Dutan
          </h1>
          <p className="text-center text-blue-600 text-3xl md:text-left md:text-4xl py-2">
            Software Engineer
          </p>
          <p className="text-center text-slate-800 text-2xl pb-4 md:pb-0 md:text-left md:text-3xl font-thin">
            I’m passionate about using technology to bring creative ideas to
            life. I focus on building innovative solutions and exploring new
            ways to push the boundaries of what’s possible in software
            development.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGgLVs0vgJWQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727713654350?e=1739404800&v=beta&t=Mc7THVaNPQrqGF--cuxqIvJEKKsFsMfHFiOZw5WAl30"
            alt=""
            className="w-100 h-72"
          />
        </div>
      </div>
    </div>
  );
});

export default LandingPage;
