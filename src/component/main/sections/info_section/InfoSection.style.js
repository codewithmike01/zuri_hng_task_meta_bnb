import styled from 'styled-components';
import { primaryColor } from '../../../../global_componets_style/Global.style';

export const InfoContainer = styled.div`
  background-color: ${primaryColor};

  padding-top: 8.625rem;
  padding-bottom: 8.6875rem;
`;

export const InfoWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .text-section {
    color: #fff;
    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 60px;
      background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 35px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 35px;
      margin-bottom: 57px;
    }

    .btn-container {
      button {
        padding: 0.7rem 1.5rem;
        border: none;
        outline: none;
        background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
        border-radius: 8px;
        color: ${primaryColor};
      }
    }
  }

  .image-section {
    position: relative;
    .top-image {
      max-width: 600px;
      img {
        width: 100%;
      }
    }
  }
`;
