import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavHeaderContainer, NavHeaderWrapper } from './NavHeader.style';
import logo from '../../assests/images/logo.svg';
import logoName from '../../assests/images/logo_name.svg';
import { FiMenu, FiX } from 'react-icons/fi';

const NavHeader = ({ func }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [navState, setNavState] = useState(true);
  const location = useLocation();

  // Hide onPage navigation when not present on current page
  useEffect(() => {
    if (location.pathname === '/') {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }, [location.pathname]);

  const handleClick = (data) => {
    setShowMobile(false);
    if (data === 'create') func();
  };
  return (
    <NavHeaderContainer>
      <NavHeaderWrapper showMobile={showMobile}>
        <section className="logo-section">
          <div className="logo-container">
            <img src={logo} alt="meta logo" />
          </div>
          <div className="logo-name-container">
            <img src={logoName} alt="meta logo" />
          </div>
        </section>

        <nav>
          <Link to="/" onClick={() => handleClick()}>
            Home
          </Link>
          <Link to="/place" onClick={() => handleClick()}>
            Place to stay
          </Link>

          {navState && (
            <AnchorLink href="#nfts" onClick={() => handleClick()}>
              NFTs
            </AnchorLink>
          )}

          {navState && (
            <AnchorLink href="#community" onClick={() => handleClick()}>
              Community
            </AnchorLink>
          )}
        </nav>

        <section className="create-wallet">
          <button type="button" onClick={() => handleClick('create')}>
            Create wallet
          </button>
        </section>

        {showMobile === false && (
          <FiMenu
            className="ham-menu"
            onClick={() => setShowMobile((prevState) => !prevState)}
          />
        )}

        {showMobile === true && (
          <FiX
            className="ham-menu"
            onClick={() => setShowMobile((prevState) => !prevState)}
          />
        )}
      </NavHeaderWrapper>
    </NavHeaderContainer>
  );
};

export default NavHeader;
