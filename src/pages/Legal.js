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

      <h1>Legal Notice</h1>

      <h2>Publisher Information:</h2>
      <p>
        Name: Matteo Chanté-Biyikli<br />
        Address: 9 Clos Justin, 84800 L'Isle-sur-la-Sorgue, France<br />
        Phone Number: 06 41 37 84 41<br />
        Email Address: matteochantebiyikli@gmail.com
      </p>

      <h2>Website Host:</h2>
      <p>
        Name: Vercel<br />
        
      </p>

      <h2>Intellectual Property:</h2>
      <p>
        The content of this website, including text, images, videos, logos, and graphics from the Frontend Mentor
        project, is protected by French and international copyright and intellectual property laws. Any unauthorized
        reproduction, distribution, modification, or use of the content is strictly prohibited without the prior written
        permission of the owner.
      </p>

      <h2>External Links:</h2>
      <p>
        This website may contain links to third-party websites. We assume no responsibility for the content or privacy
        practices of these websites.
      </p>

      <h2>Limitation of Liability:</h2>
      <p>
        We strive to provide accurate and up-to-date information on this website. However, we cannot guarantee the
        accuracy, completeness, or relevance of the information provided. We disclaim any liability for the use or
        interpretation of the information on this site.
      </p>

      <h2>Changes to the Legal Notice:</h2>
      <p>
        We reserve the right to modify these legal notices at any time without notice. It is your responsibility to
        regularly review this page for any updates.
      </p>
    </div>
    </>
  );
};

export default Legal;
