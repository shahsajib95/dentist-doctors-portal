import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-5 pl-5">
            <li className="nav-item active">
                <a className="nav-link ml-5 pl-5">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5" href="#">Services</a>
            </li>
            <li className="nav-item">
             <a className="nav-link ml-5" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link ml-5 text-white" href="#">Blog</a>
            </li>
            <li className="nav-item ml-5">
                <a className="nav-link ml-5 text-white" href="#">Contact Us</a>
            </li>
        
            </ul>
        </div>
        </nav>
    </div>
    );
};

export default Nav;