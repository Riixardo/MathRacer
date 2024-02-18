import '../style.css'
import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";


export default function Game(props) {
    // let statename = props.location.state && props.location.state.mode;

    let {state} = useLocation();
    let statename = state.mode;
    console.log(statename);

    

    return (
        <>
            <Navbar/>

            <div className='mainSection'>
                <div className='totalContainer'>
                    <div className='questionContainer'>
                        <p>Solve 54 + 23 (placeholder) </p>
                    </div>
                    
                    <div className='answerContainer'>
                        <label className="answerLabel" htmlFor="answer">Answer:</label>
                        <form>
                        <input type="text" id="answer" className="answer"></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}