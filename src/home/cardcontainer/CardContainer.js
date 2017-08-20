import React from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';

import Card from './card/Card';

const CardContainer = props => (
  <div className="container-fluid CardContainer">
    <div className="row justify-content-around">
      {props.cards.map(i => (
        <Card key={i.id} author={i.author} excerpt={i.excerpt} id={i.id} title={i.title} link={true} />
      ))}
    </div>
  </div>
);

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardContainer;
