import React from 'react';
import Card from '../card/Card';
import {
  CardSectionContainer,
  CardSectionWrapper,
} from './CardContainer.style';

const CardContainer = ({ cardItems, title }) => {
  return (
    <CardSectionContainer>
      {title && <h3>{title}</h3>}
      <CardSectionWrapper>
        {cardItems.map(({ id, image }) => (
          <Card image={image} key={id} />
        ))}
      </CardSectionWrapper>
    </CardSectionContainer>
  );
};
export default CardContainer;
