import React from 'react';
import Card from '../../../../global_componets_style/card/Card';
import { CardSectionContainer, CardSectionWrapper } from './CardSection.style';
import { cardItems } from './service/cardService';

const CardSection = () => {
  return (
    <CardSectionContainer>
      <h3>Inspiration for your next adventure</h3>
      <CardSectionWrapper>
        {cardItems.map(({ id, image }) => (
          <Card image={image} key={id} />
        ))}
      </CardSectionWrapper>
    </CardSectionContainer>
  );
};

export default CardSection;
