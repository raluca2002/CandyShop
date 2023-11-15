import React from 'react';
import './HomePage.css'
import Header from '../header/Header';

function HomePage() {
  
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

