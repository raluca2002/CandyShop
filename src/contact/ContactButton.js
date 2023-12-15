import React from 'react';
import Popup from 'reactjs-popup';
import './ContactButton.css';
import Footer from '../footer/Footer';

const ContactButton = ({ onClick }) => {
  return (
    <div className="contactContainer">
      {/* Aici adaugăm cele 7 casete cu imagine și descriere */}
      <div className="contactButton">
        <img className="contactImage" src="images/georgiana.jpg" alt="Georgiana" />
        <p>Georgiana</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/imagine2.jpg" alt="Alexandru" />
        <p>Alexandru</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/raluca.jpg" alt="Raluca" />
        <p>Raluca</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/oana.jpg" alt="Oana" />
        <p>Oana</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/sebi.jpg" alt="Sebastian" />
        <p>Sebastian</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/teo.jpg" alt="Teodor" />
        <p>Teodor</p>
      </div>
      <div className="contactButton">
        <img className="contactImage" src="images/imagine1.jpg" alt="Tudor" />
        <p>Tudor</p>
      </div>
      <Footer/>
    </div>
    
  );
};

export default ContactButton;
