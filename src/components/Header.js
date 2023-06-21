import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClicked2, setIsClicked2] = useState(false);
  const location = useLocation();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  useEffect(() => {
    // Fonction pour déterminer l'index actif en fonction de l'URL
    const getActiveIndex = () => {
      const path = location.pathname;
      if (path === "/") return 0;
      if (path === "/planete") return 1;
      if (path === "/crew") return 2;
      if (path === "/technology") return 3;
      return null;
    };

    // Définir l'index actif au montage du composant
    setActiveIndex(getActiveIndex());

    // Mettre à jour le style de .circle-container en fonction de isClicked2
    const circleContainer = document.querySelector(".circle-container");
    const list = document.querySelector('.destination .destination-info ul')
    const footer = document.querySelector('footer')
    const p = document.querySelector('.destination-description')
    if (circleContainer) {
      circleContainer.style.display = isClicked2 ? "none" : "flex";
      
    }
    if (list) {
      
      list.style.display = isClicked2 ? "none" : "flex";
     
    }
    if (footer) {
      
      footer.style.display = isClicked2 ? "none" : "block";
    }
    if(p){
      p.style.position = isClicked2 ? "absolute" : "static";
    }
  }, [location.pathname, isClicked2]);

  return (
    <header>
      <img className="logo" src="./assets/shared/logo.svg" alt="" />
      <ul>
        <NavLink to={"/"}>
          <li
            onClick={() => handleClick(0)}
            className={activeIndex === 0 ? "clicked btm" : ""}
          >
            <strong>00</strong> home
          </li>
        </NavLink>
        <NavLink to={"/planete"}>
          <li
            onClick={() => handleClick(1)}
            className={activeIndex === 1 ? "clicked btm" : ""}
          >
            <strong>01</strong> planete
          </li>
        </NavLink>
        <NavLink to={"/crew"}>
          <li
            onClick={() => handleClick(2)}
            className={activeIndex === 2 ? "clicked btm" : ""}
          >
            <strong>02</strong> anecdotes
          </li>
        </NavLink>
        <NavLink to={"/technology"}>
          <li
            onClick={() => handleClick(3)}
            className={activeIndex === 3 ? "clicked btm" : ""}
          >
            <strong>03</strong> contact
          </li>
        </NavLink>
      </ul>
      <img
        className={`icon icon-hamburger ${isClicked2 ? "animate2" : "animate"}`}
        src={
          isClicked2
            ? "./assets/shared/icon-close.svg"
            : "./assets/shared/icon-hamburger.svg"
        }
        alt=""
        onClick={handleClick2}
      />
      <div className={`menu ${isClicked2 ? "open" : "close"}`}>
        <NavLink to={"/"}>
          <p
            onClick={() => handleClick(0)}
            className={activeIndex === 0 ? "clicked" : ""}
          >
            <strong>00</strong> home
          </p>
        </NavLink>
        <NavLink to={"/planete"}>
          <p
            onClick={() => handleClick(1)}
            className={activeIndex === 1 ? "clicked" : ""}
          >
            <strong>01</strong> planete
          </p>
        </NavLink>
        <NavLink to={"/crew"}>
          <p
            onClick={() => handleClick(2)}
            className={activeIndex === 2 ? "clicked" : ""}
          >
            <strong>02</strong> anecdotes
          </p>
        </NavLink>
        <NavLink to={"/technology"}>
          <p
            onClick={() => handleClick(3)}
            className={activeIndex === 3 ? "clicked" : ""}
          >
            <strong>03</strong> contact
          </p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;



