import React from 'react';
import { InfoContainer, InfoWrapper } from './InfoSection.style';
import BlueHome from '../../../../assests/images/rounded_img.svg';
// import LightHome from '../../../../assests/images/white_house.svg';
// import PlayHome from '../../../../assests/images/play_house.svg';

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <section className="text-section">
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <div className="btn-container">
            <button type="button"> Learn more</button>
          </div>
        </section>

        <section className="image-section">
          <div className="top-image">
            <img src={BlueHome} alt="Home " />
          </div>
        </section>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
