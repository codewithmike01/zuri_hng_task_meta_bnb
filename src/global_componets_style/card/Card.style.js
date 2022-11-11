import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100%;
  background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
  border: 1px solid #d7d7d7;
  padding: 0.6rem;
  border-radius: 15px;

  .card-img-container {
    img {
      width: 100%;
    }
  }

  .card-text {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.6rem;
    line-height: 13px;

    .top-text {
      display: flex;
      justify-content: space-between;

      .strong-text {
        font-weight: bold;
      }
    }

    .bottom-text {
      display: flex;
      justify-content: space-between;
    }

    .star-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
