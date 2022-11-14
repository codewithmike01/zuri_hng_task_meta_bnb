import React from 'react';
import Banner from '../banner/Banner';
import { MainContainer } from './Main.style';
import OpenSea from '../../assests/images/opensea_token.svg';
import MBToken from '../../assests/images/mb_token.svg';
import MetaMask from '../../assests/images/meta_mask_token.svg';
import InfoSection from './sections/info_section/InfoSection';
import CardContainer from '../../global_componets_style/card_container/CardContainer';
import { cardItems } from './sections/card_section/service/cardService';
const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <section className="strip-section">
        <ul>
          <li>
            <img src={MBToken} alt="Mb Token logo" />
            <p className="mb-token">MBToken</p>
          </li>

          <li>
            <img src={MetaMask} alt="Meta Mask token logo" />{' '}
            <p className="meta-mask">METAMASK</p>
          </li>

          <li>
            <img src={OpenSea} alt="Open Sea token logo" />
            <p className="opensea">OpenSea</p>
          </li>
        </ul>
      </section>

      <CardContainer
        cardItems={cardItems}
        title="Inspiration for your next adventure"
        scrollId="nfts"
      />
      <InfoSection scrollId="community" />
    </MainContainer>
  );
};

export default Main;
