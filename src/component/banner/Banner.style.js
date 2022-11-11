import styled from 'styled-components';
import { primaryColor } from '../../global_style/Global.style';

export const BannerContainer = styled.div``;

export const BannerWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.1875rem;

  .banner-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 140%;
      letter-spacing: -0.02rem;
      .colored-text {
        color: ${primaryColor};
      }
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 1.009rem;
      line-height: 35px;
    }
  }
`;
