// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <FontAwesomeIcon icon={faEnvelope} /> ByteMe@yahoo.com
        <FontAwesomeIcon icon={faPhone} /> 0745236719
        <FontAwesomeIcon icon={faMapMarker} /> Mihai Eminescu 12, Cluj-Napoca
      </div>
    </div>
  );
};

export default Footer;
