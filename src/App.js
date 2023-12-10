import './App.css';
import './style.css'

import { useState } from 'react';

function App() {

  const [current, setCurrent] = useState(0); 

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ]; 

  function nextSlide(){

    setCurrent(current === images.length - 1 ? 0 : current + 1); 
  }

  function prevSlide(){

    setCurrent(current === 0 ? images.length - 1 : current -1); 
  }

  return (
    <div>
    <h2>Project 1: Image Carousel</h2>
    <div className="slider">
    <div className="previous-arrow" onClick={prevSlide}>
    ⬅
    </div>
    <div className="next-arrow" onClick={nextSlide}> 
    ⮕
    </div>
    {
      images.map(
        (image, index) => 
          current === index && (
            <div key={image} className="slide"> 

            <img src={image} alt="images" />
            
            </div>
          )
        
      )
    }

    </div>

    </div>
  );
}

export default App;
