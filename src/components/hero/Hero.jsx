import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <div className="textContainer">
            <h2>AMNA WAHEED</h2>
            <h1>Mern Stack & Next JS Developer</h1>
            <div className="buttons">
                <button>See the Latest Works</button>
                <button>Contact Me</button>
            </div>
            <img src= '/assets/scroll.png' alt= ""/>
        </div>
        </div>
        <div className="slidingTextContainer">
          Writer Content Creater Influencer
        </div>
        <div className="imageContainer">
            <img src= '/assets/hero.png' alt= ""/>
        </div>
    </div>
  )
}

export default Hero