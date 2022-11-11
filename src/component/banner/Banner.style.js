import styled from 'styled-components';
import { primaryColor } from '../../global_componets_style/Global.style';

export const BannerContainer = styled.div``;

export const BannerWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.1875rem;
  flex: wrap;

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

    form {
      display: grid;
      grid-template-columns: 2fr 1fr;

      .input-banner-search {
        background: rgba(247, 247, 247, 0.1);
        border: 1px solid #a3a3a3;
        border-radius: 8px 0px 0px 8px;
        padding: 1.2rem 0;

        &::placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 0.8rem;
          line-height: 130%;
          color: #b8b8b8;
        }
        &:focus {
          outline: none;
        }
      }

      button {
        width: 100%;
        border-radius: 0px 8px 8px 0px;
      }

      /* General form values */
      .input-banner-search,
      button {
        padding-left: 0.7rem;
        height: 54px;
      }
    }
  }

  .banner-image {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    height: calc(100% + 100px);

    .first-image-stack-container {
      justify-content: flex-end;
    }

    /* Genaral values */
    .first-image-stack-container,
    .second-image-stack-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
