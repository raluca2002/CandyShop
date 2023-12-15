import React from 'react';
import './HomePage.css';
import Footer from '../footer/Footer';

function HomePage() {
  return (
    <div id='homePage'>
        <div className='homePageDescription'>
          <img  id='donutImg' src='donut.jpg' alt='donut'/>
          <p> 
            <h2>Byte Me</h2>
            <h3>
                is your ultimate destination for a global candy adventure!
                As an online candy store, Byte Me takes sweet tooth cravings to new heights by offering a delectable array of international candies.
                Explore a world of flavor from the comfort of your home, with an amazing
                selection of sweet treats sourced from various corners of the globe. 
            </h3> 
          </p>
        </div>
        <Footer/>
    </div>
  );
};

export default HomePage;

