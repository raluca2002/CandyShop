import React from 'react';
import Header from '../header/Header';
import './HomePage.css';

function HomePage() {
  //daca fac nav la butoanele din subheader nu mai randez header-ul in homepage
  return (
    <div id='homePage'>
        <Header/> 
        <div className="description">
          <h2>Because adulting needs sugar!</h2>
        </div>
    </div>
  );
};

export default HomePage;

