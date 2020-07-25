import React from "react";
 import { NavLink } from "react-router-dom";
 import img from "./images/covid.png"

const Navbar = () => {
    return(
        <>

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" to="/">
                                <img src={img} alt="Logo"/>
                               
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/home">Covid Satus In India</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/world_status">World Covid Status</NavLink>
                                </li>
                               
                            </ul>
                           
                            </div>
                        </div>
                        </nav>


                </div>
            </div>
        </div>
        </>
    )
}


export default Navbar;