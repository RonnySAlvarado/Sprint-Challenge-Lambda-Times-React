import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = props => {
  return (
    <CardsContainerStyle>
      {props.cards.map((eachCard, index) => <Card eachCard={eachCard} key={index} />)}
    </CardsContainerStyle>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;