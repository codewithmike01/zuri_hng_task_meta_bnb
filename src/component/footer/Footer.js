import React from 'react';
import { FooterContainer, FooterWrapper } from './Footer.style';
import Logo from '../../assests/images/footer_logo.svg';
import Facebook from '../../assests/images/facebook.svg';
import Twitter from '../../assests/images/twitter.svg';
import Instagram from '../../assests/images/instagram.svg';
import Copy from '../../assests/images/copy.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <section className="logo-socials">
          <div className="logo-container">
            <img src={Logo} alt="Metabnb logo" />
          </div>

          <ul>
            <li>
              <img src={Facebook} alt="facebook" />
            </li>
            <li>
              <img src={Instagram} alt="facebook" />
            </li>
            <li>
              <img src={Twitter} alt="facebook" />
            </li>
          </ul>
        </section>
        <ul className="info">
          <li className="heading">Community</li>

          <li>NFT</li>

          <li>Tokens</li>

          <li>Landlords</li>

          <li>Discord</li>
        </ul>

        <ul className="info">
          <li className="heading">Places</li>

          <li>castle</li>

          <li>Farms</li>

          <li>Beach</li>

          <li>Learn more</li>
        </ul>

        <ul className="info">
          <li className="heading">About us</li>

          <li>Road map</li>

          <li>Creators</li>

          <li>Career</li>

          <li>contact us</li>
        </ul>
      </FooterWrapper>

      <div className="copy-right">
        <img src={Copy} alt="Copy Right sign" />
        <p> 2022 Metabnb</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
