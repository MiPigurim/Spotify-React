import React from "react";
import "./Sidebar.css";
import logoSpotify from "../assets/icons/logo-spotify.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
    <nav className="sidebar__navigation">
      <div className="sidebar__logo">
        <img src={logoSpotify} alt="Logo Spotify" />
      </div>
      <ul>
        <li>
          <a href="">
            <span></span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="">
            <span></span>
            <span>Busca</span>
          </a>
        </li>
      </ul>
    </nav>


   
    </div>
  )
}

export default Sidebar;