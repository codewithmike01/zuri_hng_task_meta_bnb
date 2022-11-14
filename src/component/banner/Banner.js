import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonSharp from '../../global_componets_style/buttons/ButtonSharp';
import { BannerContainer, BannerWrapper } from './Banner.style';
import HouseNight from '../../assests/images/house_night.svg';
import HouseNoRoof from '../../assests/images/house_fun.svg';
import HouseSmoke from '../../assests/images/house_smoke.svg';
import HouseFun from '../../assests/images/house_no_roof.svg';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <section className="banner-text">
          <h2>
            Rent a <span className="colored-text">Place</span> away from <br />{' '}
            <span className="colored-text">Home</span> in the{' '}
            <span className="colored-text">Metaverse</span>
          </h2>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <form>
            <input
              type="text"
              name="search-location"
              placeholder="Search for location"
              className="input-banner-search"
            />
            <ButtonSharp text="Search" />
          </form>
        </section>

        <section className="banner-image">
          <div className="first-image-stack-container">
            <img src={HouseNight} alt="NFT of house night" />
            <img src={HouseFun} alt="NFT of house fun" />
          </div>
          <div className="second-image-stack-container">
            <img src={HouseSmoke} alt="NFT of house fun" />
            <img src={HouseNoRoof} alt="NFT of house night" />
          </div>
        </section>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
