import styled from 'styled-components';

export const NavHeaderContainer = styled.div`
  padding-top: 1.5rem;
`;

export const NavHeaderWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  /* Ham */
  .ham-menu {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: none;
  }

  .logo-section {
    display: flex;
    align-items: flex-end;

    .logo-container {
      width: 2.624375rem;
      height: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .logo-name-container {
      width: 8.75625rem;
      height: 1.6rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  nav {
    display: flex;
    gap: 3rem;

    a {
      list-style-type: style none;
      text-decoration: none;
      color: #434343;
      font-size: 1rem;
    }
  }

  .create-wallet {
    align-self: center;
    button {
      cursor: pointer;
      color: #fff;
      padding: 0.7rem 1.5rem;
      border: none;
      outline: none;
      background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    .ham-menu {
      display: block;
    }

    /* Display none */
    nav,
    .create-wallet {
      display: ${({ showMobile }) => (showMobile ? 'flex' : 'none')};
      position: fixed;
      top: 80px;
      flex-direction: column;
      z-index: 3;
      width: 240px;
      background: #1d1d1e;
      left: -100%;
      animation: slides 0.5s ease-in-out forwards;

      @keyframes slides {
        from {
          left: 100%;
        }

        to {
          left: 0;
        }
      }
    }

    .create-wallet {
      height: 100px;
      z-index: 2;
      padding-top: 1.5rem;

      button {
        width: 80%;
        margin: 0 auto;
      }
    }

    nav {
      top: 170px;
      padding-top: 2rem;
      padding-bottom: 2rem;

      a {
        color: #fff;
        margin: 0 auto;
      }
    }
  }
`;
