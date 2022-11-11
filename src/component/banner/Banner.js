import React from 'react';
import ButtonSharp from '../../global_componets_style/buttons/ButtonSharp';
import { BannerContainer, BannerWrapper } from './Banner.style';

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
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
