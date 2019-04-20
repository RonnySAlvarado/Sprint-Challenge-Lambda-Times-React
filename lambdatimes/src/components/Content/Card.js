import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const HeadlineStyle = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorStyle = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const ImageContainerStyle = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img {
    width: 40px;
  }
`;

const Card = props => {
  return (
    <CardStyle>
      <HeadlineStyle>{props.eachCard.headline}</HeadlineStyle>
      <AuthorStyle>
        <ImageContainerStyle>
          <img src={props.eachCard.img} />
        </ImageContainerStyle>
        <span>By {props.eachCard.author}</span>
      </AuthorStyle>
    </CardStyle>
  );
};

Card.propTypes = {
  card: PropTypes.object
};

export default Card;
