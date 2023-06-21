import React, { useEffect } from "react";
import Header from "../components/Header";
import { NavLink, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const body = document.querySelector("body");

    // Supprimez toutes les classes de fond existantes
    body.classList.remove(
      "home-background",
      "destination-background",
      "crew-background",
      "technology-background"
    );

    // Ajoutez une classe de fond différente en fonction de l'URL
    if (path === "/") {
      body.classList.add("home-background");
      body.style= 'overflow:hidden;'
    } else if (path === "/planete") {
      body.classList.add("destination-background");
      body.style= 'overflow:hidden;'
    } else if (path === "/crew") {
      body.classList.add("crew-background");
      body.style= 'overflow:hidden;'
    } else if (path === "/technology") {
      body.classList.add("technology-background");
      body.style= 'overflow:hidden;'
    }else if (path === '/legal') {
      body.classList.add('crew-background');
      body.style= 'overflow:visible;'
    }else{
        body.classList.add("home-background");
        body.style= 'overflow:hidden;'
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-text-container">

        <div className="home-text">
          <h3>Unleash the wonders of the cosmos!</h3>
          <h1>space</h1>
          <p>
          Embark on an extraordinary journey through space with our captivating website. Explore distant planet like Mars, the Moon, Europa, and Titan. Dive into cosmic anecdotes  and  get ready to embark on an epic journey beyond my website!
          </p>
        </div>
        </div>
        <NavLink to={'/planete'} className={'bubble-container'}>

        

        <div className="bubble">
          <p>explore</p>
        </div>
      
        </NavLink>
        </div>
        <Footer />
    </>
  );
};

export default Home;
