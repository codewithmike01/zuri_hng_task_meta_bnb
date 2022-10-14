import styled from 'styled-components';

export const PlaceToStayContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
`;

export const PlaceToStayWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .nav-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-links {
      .search-tab {
        display: flex;
        align-items: center;

        gap: 6rem;

        li {
          list-style-type: none;
          button {
            border: none;
            background: transparent;
            cursor: pointer;
          }
        }
      }
    }

    .filter-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0.6rem;
      background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
      border: 1px solid #b4b4b4;
      border-radius: 8px;
      width: 161px;
      height: 40px;

      p {
        color: #333333;
        font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 19px;
      }
    }
  }

  .card-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 1rem;
  }
`;
