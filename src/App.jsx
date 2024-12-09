import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import About from "./About";
import Technical from "./Technical";
import Education from "./Education";

const App = () => {
  const [visibilityStates, setVisibilityStates] = useState({
    landingPage: true, // Start with true for LandingPage
    technicalPage: false,
    educationPage: false,
  });

  const landingPageRef = useRef(null);
  const technicalRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === landingPageRef.current) {
            setVisibilityStates((prev) => ({
              ...prev,
              landingPage: entry.isIntersecting,
            }));
          } else if (entry.target === technicalRef.current) {
            setVisibilityStates((prev) => ({
              ...prev,
              technicalPage: entry.isIntersecting,
            }));
          } else if (entry.target === educationRef.current) {
            setVisibilityStates((prev) => ({
              ...prev,
              educationPage: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (landingPageRef.current) observer.observe(landingPageRef.current);
    if (technicalRef.current) observer.observe(technicalRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (landingPageRef.current) observer.unobserve(landingPageRef.current);
      if (technicalRef.current) observer.unobserve(technicalRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  return (
    <div className="bg-main">
      <Nav />
      <LandingPage
        ref={landingPageRef}
        isVisible={visibilityStates.landingPage}
      />
      <Technical
        ref={technicalRef}
        isVisible={visibilityStates.technicalPage}
      />
      <Education
        ref={educationRef}
        isVisible={visibilityStates.educationPage}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
