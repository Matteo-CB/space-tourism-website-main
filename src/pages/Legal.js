import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
const Legal = () => {
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
    <div className="legal">

      
      <p>
        Ce site est édité par Matteo Chante-Biyikli, résidant 9 clos justin, 84800 l'isle sur la sorgue.

Téléphone : 0641378441.

Courrier électronique : matteochantebiyikli@gmail.com.

Le directeur de la publication est Matteo Chante-Biyikli.

Ce site est hébergé par la société Vercel Inc., située 340 S Lemon Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.

      </p>

      <p>
        The content of this website, including text, images, videos, logos, and graphics from the Frontend Mentor
        project, is protected by French and international copyright and intellectual property laws. Any unauthorized
        reproduction, distribution, modification, or use of the content is strictly prohibited without the prior written
        permission of the owner.
      </p>

    </div>
    </>
  );
};

export default Legal;
