import '../../style.css'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import Homepage from '../../pages/Homepage';
import About from '../../pages/About';

// import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar () {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <Link to="/">
                    <h1>MathRacer</h1>
                </Link>
            </div>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="HeroSection" className="navbar-content">
                        Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="MySkills" className="navbar-content">
                        Play Now</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar-content">
                        Leaderboard</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar-content">
                        Contact</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar-content">
                        Login</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar-content">
                        Register</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">
            Contact Me</Link>
        </nav>
    )
}

export default Navbar;