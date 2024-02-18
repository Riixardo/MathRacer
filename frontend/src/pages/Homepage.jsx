import About from "./About";
import Navbar from "../components/Navbar/index";
import LandingSection from "../components/LandingSection";
import {Grid, Item} from "react";
import "../style.css"


function Homepage() {

  return (
    <div className="homepage">
      <Navbar/>
      <LandingSection/>
    </div>
  )
}

export default Homepage;
