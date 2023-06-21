import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Technology = () => {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");
    console.log(formMess);
    emailjs
      .sendForm(
        "service_4ohn18e",
        "template_edimfa1",
        form.current,
        "Z6epeNDCgv3RBjeyR"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = `<p class='success'>Message envoyé !</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML = `<p class='error'>Une erreur s'est produite, veuillez réessayer</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };
  return (
    <>
      <Header />
      <div id="contact">
        <div className="form-container">
          <div className="form-title">
            <h1 className="title"><span>03</span>contact</h1>
            
<p>We would love to hear from you! Feel free to get in touch with us for any questions, suggestions, or collaborations. Simply fill out the form below, and we'll get back to you as soon as possible.</p>

          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              placeholder="name"
              type="text"
              name="name"
              required
              autoComplete="off"
            />
            <input
              placeholder="email"
              type="email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              placeholder="message"
              name="message"
              required
              autoComplete="off"
            />
            <input className="btn-submit" type="submit" value="Send message" />
            <div className="form-message"></div>
          </form>
        </div>
        {/* <img src="./images/pattern-rings.svg" alt="image rings" /> */}
      </div>
      <Footer />
    </>
  );
};

export default Technology;
