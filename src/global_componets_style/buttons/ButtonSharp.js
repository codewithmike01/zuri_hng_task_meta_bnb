import styled from 'styled-components';

import React from 'react';

const ButtonSharp = ({ text }) => {
  return (
    <ButtonContainer>
      <button>{text}</button>
    </ButtonContainer>
  );
};

export default ButtonSharp;

const ButtonContainer = styled.div`
  button {
    cursor: pointer;
    color: #fff;
    padding: 0.7rem 1.5rem;
    border: none;
    outline: none;
    background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  }
`;
