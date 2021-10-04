import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Facilitates from "../Facilitates/Facilitates";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Facilitates></Facilitates>
      <Contact></Contact>
    </div>
  );
};

export default Home;
