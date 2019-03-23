import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.eachCard.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.eachCard.img} />
        </div>
        <span>By {props.eachCard.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object
};

export default Card;
