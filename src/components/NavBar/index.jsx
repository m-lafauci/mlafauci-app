import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div>
      <nav className="navbar fixed-top navbar-expand-lg mb-4 d-flex align-items-center">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="nav-link" to='/'><img alt="Style" src="./images/style.png" /></a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
              <a className="nav-link" id="navRemeras" to='/categoria/REMERAS'>REMERAS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navMusculosas" to='/categoria/MUSCULOSAS'>MUSCULOSAS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navCamisas" to='/categoria/CAMISAS'>CAMISAS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navBuzos" to='/categoria/BUZOS'>BUZOS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navCamperas" to='/categoria/CAMPERAS'>CAMPERAS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navSweaters" to='/categoria/SWEATERS'>SWEATERS</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navPantalones" to='/categoria/PANTALONES'>PANTALONES</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="navVestidos" to='/categoria/VESTIDOS'>VESTIDOS</a>
              </li>
            </ul>
          <form id="busquedaNombre" className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar artículos..." aria-label="Search" /> 
            <button className="btn btn-primary my-sm-0" type="submit">Buscar</button>
          </form>
          </div>
        </div>
        <a to='cart'><CartWidget /></a>
      </nav>
      </div>
    );
}

export default NavBar;