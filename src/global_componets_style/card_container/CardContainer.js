import React from 'react';
import Card from '../card/Card';
import {
  CardSectionContainer,
  CardSectionWrapper,
} from './CardContainer.style';

const CardContainer = ({ cardItems }) => {
  return (
    <CardSectionContainer>
      <CardSectionWrapper>
        {cardItems.map(({ id, image }) => (
          <Card image={image} key={id} />
        ))}
      </CardSectionWrapper>
    </CardSectionContainer>
  );
};
export default CardContainer;
