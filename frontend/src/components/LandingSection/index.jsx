
import '../../style.css'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function LandingSection ()  {
    return (
        <section id='LandingSection' className='landing-section'>
            <TextComponent className='landingPitchTitle'>Race to the Finish Line</TextComponent>
            <TextComponent className='landingPitchText'>Compete in Real-Time Mental Math Challenges</TextComponent>


            <div className='landing-subtexts'>
                <div className="buttonContainerLanding"> 
                    <Link to={'/startgame'}><button className='playNowButton'>Play Now!</button></Link>
                </div>
                <SubTextComponent className='learnMoreText'>Learn More →</SubTextComponent>
            </div>
        </section>
    )
}


export default LandingSection;

function TextComponent({className, children}) {
    return (
        <>
            <div className={className + 'Container textComponent'}>
                <p className={className}>{children}</p>
            </div>
        </>
    )
}

function SubTextComponent({className, children}) {
    return (
        <>
            <div className={className + 'Container subTextComponent'}>
                <p className={className}>{children}</p>
            </div>
        </>
    )
}
