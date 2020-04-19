import React from 'react';
import './Header.css';
import image from '../../img/MaskGroup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="top">
        <div className="header-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-5 pl-5">
                    <li className="nav-item active">
                        <a className="nav-link ml-5 pl-5"><Link to="/home">Home</Link><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                     <Link to="/login"><a className="nav-link ml-5" href="#">Dashboard</a></Link>
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

            <div className="header-content p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Your New Smile <br/> Starts Here</h1>
                        <br/>
                        <p className="text-black-50">Lorem Ipsum is simply dummy text of the printing and <br/>  typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s</p>
                       
                        <Link to="/appoinment">  <button className="btn btn-use"> Get Appoinment </button> </Link>
                        
                       
                    </div>
                    <div className="col-md-6">
                        <img className="w-75 rounded" src={image} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="time">
                <div className="row">
                    <div className="col-md-3 bg-open d-flex align-items-center p-3 rounded">
                    <FontAwesomeIcon icon={faClock} className="icon pr-3"/>
                        <div>
                        <h5 className="text-white">Opening Hours </h5>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1 bg-visit d-flex align-items-center p-3 rounded">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon pr-3"/>
                         <div>
                        <h5 className="text-white">Visit our location</h5>
                        <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1 bg-open d-flex align-items-center p-3 rounded">
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon pr-3"/>
                        <div>
                        <h5 className="text-white">Contact us now</h5>
                        <p> +000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Header;