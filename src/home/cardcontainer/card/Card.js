import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = props => (
  <div className="col-3 Card">
    <h5 className="Card__titulo">{props.title}</h5>
    <p className="Card__texto">{props.excerpt}</p>
    <p className="Card__author">by: {props.author}</p>
  </div>
);

Card.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
