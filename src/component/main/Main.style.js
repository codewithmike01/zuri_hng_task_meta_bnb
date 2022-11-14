import styled from 'styled-components';
import { bgColor } from '../../global_componets_style/Global.style';

export const MainContainer = styled.div`
  margin-top: 5.133125rem;

  display: flex;
  flex-direction: column;
  gap: 6.02875rem;

  .strip-section {
    margin-top: 3rem;
    background: ${bgColor};
    padding: 0.5rem 0;

    ul {
      width: 90%;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
      gap: 2rem;

      li {
        display: flex;
        gap: 0.5rem;
        list-style-type: none;

        p {
          align-self: center;
          color: #fff;
          font-size: 1.5rem;
        }

        .mb-token {
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: bold;
        }

        .meta-mask {
          color: #f7f7f7;
          font-style: normal;
        }

        .opensea {
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: 700;
        }
      }
    }
  }
`;
