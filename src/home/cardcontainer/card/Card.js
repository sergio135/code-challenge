import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.state = {
      redirect: false,
    }
  }

  test() {
    if (this.props.link) {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.props.id}`} />;
    }
    return (
      <div onClick={this.test} className="col-3 Card">
        <h5 className="Card__titulo">{this.props.title}</h5>
        <p className="Card__texto">{this.props.excerpt}</p>
        <p className="Card__author">by: {this.props.author}</p>
      </div>
    );
  }
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;
