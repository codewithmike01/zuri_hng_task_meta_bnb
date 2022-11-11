import React from 'react';
import { CardContainer } from './Card.style';
import Star from '../../assests/images/star.svg';

const Card = ({ id, image }) => {
  return (
    <CardContainer>
      <div className="card-img-container">
        <img src={image} alt="Chesse card" />
      </div>

      <div className="card-text">
        <div className="top-text">
          <p>Desert king</p>
          <p className="strong-text">1MBT per night</p>
        </div>

        <div className="bottom-text">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((val) => (
            <img src={Star} alt="Star" />
          ))}
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
