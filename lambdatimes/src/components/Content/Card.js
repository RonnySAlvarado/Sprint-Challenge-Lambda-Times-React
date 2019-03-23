import React from 'react';

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

// Make sure to include PropTypes.

export default Card;
