import About from "./About";

import "../style.css"

function StartGame() {
  let modes = ["Addition", "Subtraction", "Multiplication", "Division"];

  return (
    <>
    <div className="">
      <h1 className="startgame_h1">Home</h1>
    </div>
    <div className="startgame_header1">
      <h2 className="startgame_h2">Math Themes</h2>
    </div>

    {modes.map((mode) => {
      return (
        <div className="modeContainer">
          <button className="modeBtn startgame_btn">{mode}</button>
        </div>
      )
    })}
    </>
  )
}

export default StartGame;
