import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";
import NotMatch from "./Componets/NotMatch.js/NotMatch";
import Contact from "./Componets/Contact/Contact";
import About from "./Componets/About/About";
import NavBar from "./Componets/NavBar/NavBar";
import Services from "./Componets/Services/Services";
import Login from "./Componets/Login/Login";
import ServicesRouter from "./Componets/ServicesRouter/ServicesRouter";
import Footer from "./Componets/Footer/Footer";
import Facilities from "./Componets/Facilities/Facilities";
import Register from "./Componets/Register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <NavBar></NavBar>
          <About></About>
        </Route>
        <Route path="/services">
          <NavBar></NavBar>
          <ServicesRouter></ServicesRouter>
        </Route>
        <Route path="/facilities">
          <NavBar></NavBar>
          <Facilities></Facilities>
        </Route>
        <Route path="/contact">
          <NavBar></NavBar>
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <NavBar></NavBar>
          <Login></Login>
        </Route>
        <Route path="/signup">
          <NavBar></NavBar>
          <Register></Register>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NavBar></NavBar>
          <NotMatch></NotMatch>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
