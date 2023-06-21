import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import Footer from "../components/Footer";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(data.destinations[0]);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleDestinationClick = (index) => {
    setSelectedDestination(data.destinations[index]);
    setActiveIndex(index);
  };

  return (
    <>
    
    <div className="destination">
      <Header />
      <h3 className="title">
        <span>01</span> pick your star
      </h3>
      <div className="planet-grid">
        <div className="destination-image">
          <img className="destination-img" src={selectedDestination.images.png} alt="" />
        </div>

        <div className="destination-info">
          <ul planetesclassName="destination-list">
            <li onClick={() => handleDestinationClick(0)} className={activeIndex === 0 ? "clicked2" : ""}>moon</li>
            <li onClick={() => handleDestinationClick(1)} className={activeIndex === 1 ? "clicked2" : ""}>mars</li>
            <li onClick={() => handleDestinationClick(2)} className={activeIndex === 2 ? "clicked2" : ""}>europa</li>
            <li onClick={() => handleDestinationClick(3)} className={activeIndex === 3 ? "clicked2" : ""}>titan</li>
          </ul>
          <h1 className="destination-name">{selectedDestination.name}</h1>
          <p className="destination-description">{selectedDestination.description}</p>

          <div className="destination-distance">
            <h5 className="destination-label">avg. distance</h5>
            <h4>{selectedDestination.distance}</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Destination;

