import React from "react";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import About from "./About";
import Technical from "./Technical";

const App = () => {
  return (
    // <div className="bg-gradient-to-br from-slate-900 to-slate-600">
    <div className="bg-main">
      <Nav />
      <LandingPage />
      <Technical />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
