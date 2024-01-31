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


    <div className="library">
      <div className="library__content">
        <button className="library__button">Sua Biblioteca</button>
      </div>

      <section className="section-playlist">
        <div className="section-playlist__content">
          <span className="text title">Crie sua primeira playlist.</span>
          <span className="text subtitle">É fácil, vamos ajudar!</span>
          <button className="section-playlist__button">Criar playlist</button>
        </div>
        
      </section>

      <div className="cookies">Cookies</div>

      <div className="languages">
        <button className="languages__button">
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
   
    </div>
  )
}

export default Sidebar;