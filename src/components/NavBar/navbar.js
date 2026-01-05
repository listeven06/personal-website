import React from 'react';
import './navbar.css';
// import emailLogo from '../../assets/emailLogo.png';
import logo from '../../assets/invertedLogo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='Logo' className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Resume</Link>
                <Link className="desktopMenuListItem">Cover Letter</Link>
                <Link className="desktopMenuListItem">Blog</Link>
            </div>
            <button className="desktopMenuBtn">Contact Me</button>
        </nav>
    )
}

export default Navbar