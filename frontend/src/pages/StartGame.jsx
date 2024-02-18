import About from "./About";
import Game from "./Game";

import "../style.css"
import Navbar from "../components/Navbar";

import {Link} from "react-router-dom"

function StartGame() {
  let modes = ["Addition", "Subtraction", "Multiplication", "Division"];

  return (
    <>
    <Navbar/>
    <div className="mainSection">
        <div className="startgame_header1">
        <h2 className="startgame_h2">Math Themes</h2>
        </div>

        {modes.map((mode) => {
        return (
            <div className="modeContainer">
            <Link to="/game" state={{mode}}>
                <button className="modeBtn startgame_btn">{mode}</button>
              </Link>
            </div>
        )
        })}
    </div>
    </>
  )
}

export default StartGame;
