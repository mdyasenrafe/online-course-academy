import React from "react";
import firebaseInitializeAuth from "../../Firebase/Firebase.init";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Facilities from "../Facilities/Facilities";
import Header from "../Header/Header";
import Services from "../Services/Services";

firebaseInitializeAuth();

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Facilities></Facilities>
      <Contact></Contact>
    </div>
  );
};

export default Home;
