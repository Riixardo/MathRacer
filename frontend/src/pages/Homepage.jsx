import About from "./About";

// import Button from 'react-bootstrap/Button'
import "./homepage.css"

function Homepage() {
  let modes = ["Addition", "Subtraction", "Multiplication", "Division"];

  return (
    <>
    <div className="title">
      <h1>Home</h1>
    </div>
    <div className="header1">
      <h2>Math Themes</h2>
    </div>

    {modes.map((mode) => {
      return (
        <div className="modeContainer">
          <button className="modeBtn">{mode}</button>
        </div>
      )
    })}
    </>
  )
}

export default Homepage;
