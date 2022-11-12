import styled from 'styled-components';

export const CreateWalletContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(64, 64, 64, 0.3);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateWalletWrapper = styled.div`
  max-width: 600px;
  width: 90%;
  background: #ffffff;
  border-radius: 16px;
  padding-bottom: 0.8rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 1.5rem;

    h3 {
      color: '#333333';
      font-size: 1.2rem;
    }

    .cancel-container {
      cursor: pointer;
    }

    hr {
      margin-bottom: 2rem;
    }
  }
  .content {
    padding: 1.3rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .card {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 12px 20px;
      gap: 2rem;
      max-width: 536px;
      background: #f8f9fa;
      border: 1px solid #cfd8dc;
      border-radius: 12px;

      .img-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        p {
          font-family: 'Sora', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
          color: #000000;
        }
      }

      .chev {
        padding-top: 2px;
        align-self: center;
      }
    }

    p {
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 20px;
      color: #333333;
    }
  }
`;
