import React from 'react'
import Hero from './Hero.svg'
import HeroStyles from './HeroStyles.css'

function HeroImage() {
  return (
    <div className='container'>
        <div className="HeroImage">
        <div>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
        </div>
        <div>
            <img src={Hero} alt='Lost The Headphones'/>
        </div>
        </div>
    </div>
  );
}

export default HeroImage