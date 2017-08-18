import React, { Component } from 'react';
import request from '../tools/request';
import { ARTICLES_QUERY } from '../tools/queries';

import './Home.css';

import LayoutDefault from '../layout/LayoutDefault';
import CardContainer from './cardcontainer/CardContainer';

class Home extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <LayoutDefault>
        <div className="Home">
          <CardContainer cards={this.state.articles} />
        </div>
      </LayoutDefault>
    );
  }
}

export default Home;
