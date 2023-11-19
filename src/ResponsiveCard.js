import React from 'react';
import  'bulma/css/bulma.min.css';
import flowerImg from './Image/Flower img.jpg';

const ResponsiveCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by1">
          <img className='is-rounded' src={flowerImg} alt="Flower" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Flower</p>
            <p className="subtitle is-6">flower Quotes</p>
          </div>
        </div>
        <div className="content">
          This is a simple responsive card with an image. 
          
        </div>
      </div>
    </div>
  )
}

export default ResponsiveCard;