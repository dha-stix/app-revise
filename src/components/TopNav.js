import React from 'react'
import "../styles/Main.css"
import Brightness7Icon from '@material-ui/icons/Brightness5';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom"
const TopNav = () => {
    return (
        <nav className="topnav">
            <div className="hamburger">
            <MenuIcon />
            </div>
            <div className="topnav__links">
            <Brightness7Icon style={{color : "#eee", cursor : "pointer"}}/>
            <Link to="/">
            Login with Google
            </Link>
            </div>
            
        </nav>
    )
}

export default TopNav
