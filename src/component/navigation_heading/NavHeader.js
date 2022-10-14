import React from 'react';
import { Link } from 'react-router-dom';
import { NavHeaderContainer, NavHeaderWrapper } from './NavHeader.style';
import logo from '../../assests/images/logo.svg';
import logoName from '../../assests/images/logo_name.svg';
const NavHeader = () => {
  return (
    <NavHeaderContainer>
      <NavHeaderWrapper>
        <section className="logo-section">
          <div className="logo-container">
            <img src={logo} alt="meta logo" />
          </div>
          <div className="logo-name-container">
            <img src={logoName} alt="meta logo" />
          </div>
        </section>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/place">Place to stay</Link>
          <Link to="none">NFTs</Link>
          <Link to="none">Community</Link>
        </nav>

        <section className="create-wallet">
          <button>Create wallet</button>
        </section>
      </NavHeaderWrapper>
    </NavHeaderContainer>
  );
};

export default NavHeader;
