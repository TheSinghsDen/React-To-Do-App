import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" href="#">Logo</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;