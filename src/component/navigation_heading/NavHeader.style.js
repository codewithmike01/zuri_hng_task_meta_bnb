import styled from 'styled-components';

export const NavHeaderContainer = styled.div`
  padding-top: 1.5rem;
`;

export const NavHeaderWrapper = styled.div`
  width: 90%;
  max-width: 14000;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  align-items: center;

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
      color: #fff;
      padding: 0.7rem 1.5rem;
      border: none;
      outline: none;
      background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
      border-radius: 10px;
    }
  }
`;
