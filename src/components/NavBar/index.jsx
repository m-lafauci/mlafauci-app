import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
      <div>
          <nav className="navbar fixed-top navbar-expand-lg mb-4 d-flex align-items-center">
            <div className="container-fluid">
              <div className="navbar-brand">
                <NavLink className="nav-link" to='/'><img alt="Style" src="../images/style.png" /></NavLink>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navRemeras" to='/categoria/REMERAS'>REMERAS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navMusculosas" to='/categoria/MUSCULOSAS'>MUSCULOSAS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navCamisas" to='/categoria/CAMISAS'>CAMISAS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navBuzos" to='/categoria/BUZOS'>BUZOS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navCamperas" to='/categoria/CAMPERAS'>CAMPERAS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navSweaters" to='/categoria/SWEATERS'>SWEATERS</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navPantalones" to='/categoria/PANTALONES'>PANTALONES</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" id="navVestidos" to='/categoria/VESTIDOS'>VESTIDOS</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to='cart'><CartWidget /></NavLink>
          </nav>
      </div>
    );
}

export default NavBar;