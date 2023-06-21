import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import data from '../data.json';
import Footer from '../components/Footer';

const Crew = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    const body = document.querySelector("body");

    // Remove any existing background classes
    body.classList.remove(
      "home-background",
      "destination-background",
      "crew-background",
      "technology-background"
    );

    // Add a different background class based on the URL
    if (path === "/") {
      body.classList.add("home-background");
      body.style.overflow = "hidden";
    } else if (path === "/planete") {
      body.classList.add("destination-background");
      body.style.overflow = "hidden";
    } else if (path === "/crew") {
      body.classList.add("crew-background");
      body.style.overflow = "hidden";
    } else if (path === "/technology") {
      body.classList.add("technology-background");
      body.style.overflow = "hidden";
    } else if (path === "/legal") {
      body.classList.add("crew-background");
      body.style.overflow = "visible";
    } else {
      body.classList.add("home-background");
      body.style.overflow = "hidden";
    }
  }, [location.pathname]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="crew">
        <Header />
        <h3 className="title">
          <span>02</span> anecdotes
        </h3>
        <div className="container">
          <h3>{data.anecdotes[activeIndex].title}</h3>
          <h2>{data.anecdotes[activeIndex].subtitle}</h2>
          <p>{data.anecdotes[activeIndex].text}</p>
          <div className="circle-container">
            {data.anecdotes.map((anecdote, index) => (
              <div
                className={`circle ${activeIndex === index ? 'active' : ''}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <span>{index}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Crew;


