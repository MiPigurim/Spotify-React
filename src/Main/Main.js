import React from "react";
import "./Main.css";
import card1 from "../assets/playlist/1.jpeg"
import card2 from "../assets/playlist/2.png"
import card3 from "../assets/playlist/3.jpeg"
import card4 from "../assets/playlist/4.jpeg"
import card5 from "../assets/playlist/5.jpeg"
import card6 from "../assets/playlist/6.jpeg"
import card7 from "../assets/playlist/7.jpeg"
import card8 from "../assets/playlist/8.jpeg"
import card9 from "../assets/playlist/9.jpeg"
import card10 from "../assets/playlist/10.jpeg"
import card11 from "../assets/playlist/11.jpeg"
import card12 from "../assets/playlist/12.jpeg"
import card13 from "../assets/playlist/13.jpeg"
import card14 from "../assets/playlist/14.jpeg"
import card15 from "../assets/playlist/15.jpeg"


const Main = () => {
  return (
  <div className="main">
    <div className="greeting">
      <h1>Boas Vindas</h1>
      <h2>Navegar por todas as seções</h2>
    </div>

    <div className="offer__scroll-container">
      <div className="offer__list">
        <section className="offer__list-item">
          <a href="" className="cards">
            <img className="cards card1" src={card1} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card2" src={card2} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card3" src={card3} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card4" src={card4} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card5" src={card5} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card6" src={card6} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card7" src={card7} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card8" src={card8} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card9" src={card9} alt="" />
            <span>Boas Festas</span>
          </a>

          <a href="" className="cards">
            <img className="cards card10" src={card10} alt="" />
            <span>Boas Festas</span>
          </a>
          
          <a href="" className="cards">
            <img className="cards card11" src={card11} alt="" />
            <span>Boas Festas</span>
          </a>
          
          <a href="" className="cards">
            <img className="cards card12" src={card12} alt="" />
            <span>Boas Festas</span>
          </a>
          
          <a href="" className="cards">
            <img className="cards card13" src={card13} alt="" />
            <span>Boas Festas</span>
          </a>
          
          <a href="" className="cards">
            <img className="cards card14" src={card14} alt="" />
            <span>Boas Festas</span>
          </a>
          
          <a href="" className="cards">
            <img className="cards card15" src={card15} alt="" />
            <span>Boas Festas</span>
          </a>


        </section>
      </div>

    </div>
  </div> 
)};

export default Main;