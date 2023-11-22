import React from 'react';
import MisteryBox from './MisteryBox'; 
import './MisteryBoxPage.css'; 
import Footer from '../footer/Footer';

const MisteryBoxPage = () => {
  const misteryboxes = [
    { id: 1, title: 'Sweet Surprise', price: '$10', image: 'images/Mystery Candy Box from Lithuania.jpg', description: 'O descriere detaliată a MisteryBox-ului 1.'  },
    { id: 2, title: 'Mystical Candy', price: '$15', image: 'images/Mystery Candy Box from Lithuania.jpg', description: 'O descriere detaliată a MisteryBox-ului 1.'  },
    { id: 3, title: 'Sugar Rush Surprise', price: '$30', image: 'images/Mystery Candy Box from Lithuania.jpg', description: 'O descriere detaliată a MisteryBox-ului 1.'  },
    { id: 4, title: 'Flavor Frenzy Surprise', price: '$50', image: 'images/Mystery Candy Box from Lithuania.jpg', description: 'O descriere detaliată a MisteryBox-ului 1.'  },

  ];

  return (
    <>
      <div className="misterybox-page">
          <div className="description-box">
              <p>Embark on a unique flavor adventure with MisteryBox - the box full of sweet surprises that brings smiles with every opening! </p>
              <p>Each box is a magical journey into the world of flavors, where you'll uncover delicious tastes and exotic sweets.</p>
              <p>What can you find in a MisteryBox? </p>
              <p>From fluffy candies and premium chocolate to unique delights, each box is carefully curated to offer you a sweet and satisfying experience.</p>
              <p>From fluffy candies and premium chocolate to unique delights, each box is carefully curated to offer you a sweet and satisfying experience.</p>
              <p>Get ready to be amazed by unique combinations, exotic flavors, and tempting textures. </p>
              <p>Order MisteryBox now and add a sweet note to your life!</p>
          </div>
          <div className="shop-container">
              {misteryboxes.map(box => (
                <div key={box.id} className="box-container">
                  <MisteryBox title={box.title} price={box.price} image={box.image} description={box.description}/>
                </div>
              ))}
          </div>
  
        </div>
        <Footer/>
    </>
   
  );
};

export default MisteryBoxPage;


