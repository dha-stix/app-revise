import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import "../styles/Main.css"
import {Link} from "react-router-dom"
const BottomNav = () => {
    return (
        <nav className="bottomnav">
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
        </nav>
    )
}

export default BottomNav
