import '../../style.css'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

// import NewButton from '../Button';

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
                        <Link to='/home' spy="true" smooth="true" className="navbar-content">
                        Home</Link>
                    </li>
                    <li>
                        <Link to='/startgame' spy="true" smooth="true"  className="navbar-content">
                        Play Now</Link>
                    </li>
                    <li>
                        <Link to='/leaderboard' spy="true" smooth="true" className="navbar-content">
                        Leaderboard</Link>
                    </li>
                    <li>
                        <Link to='/contact' spy="true" smooth="true" className="navbar-content">
                        Contact</Link>
                    </li>
                    <li>
                        <Link to='/login' spy="true" smooth="true" className="navbar-content">
                        Login</Link>
                    </li>
                    <li>
                        <Link to='/register' spy="true" smooth="true" className="navbar-content">
                        <button className='homepageButton'>Register</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;