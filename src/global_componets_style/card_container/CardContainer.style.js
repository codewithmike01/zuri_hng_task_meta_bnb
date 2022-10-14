import styled from 'styled-components';

export const CardSectionContainer = styled.div`
  padding: 2.7rem 0;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 60px;
    color: #000000;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export const CardSectionWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
`;
