import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #1d1d1e;
  padding-top: 62px;
  padding-bottom: 2rem;

  .copy-right {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: #f7f7f7;

    font-size: 0.7rem;
  }
`;

export const FooterWrapper = styled.div`
  color: #f7f7f7;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .logo-socials {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .logo-container {
      width: 8rem;

      img {
        width: 100%;
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        list-style-type: none;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .heading {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 22px;
    }

    li {
      list-style-type: none;
      font-style: normal;
      font-weight: 400;
      font-size: 0.6rem;
      line-height: 35px;
    }
  }
`;
