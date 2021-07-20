import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import {Link} from "react-router-dom"
import "../styles/Nav.css"
const Nav = () => {
    return (
        <nav className="leftnavbar">
            <div className="logo"><MenuBookIcon className="logo__icon"/> <h3>Revise</h3></div>
            <div className="nav-links">
                <div className="nav-link">
                
                <Link to="/">
                <HomeIcon className="logo__icon"/>
                Home
                </Link>
                
                </div>
                <div className="nav-link">
                
                <Link to="/learn">
                <LocalLibraryIcon className="logo__icon"/>Learn
                </Link>
                </div>
                <div className="nav-link">
                
                <Link to="/about"> <LiveHelpIcon className="logo__icon"/>About
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
