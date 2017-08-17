import React, { Component } from 'react';
import request from '../tools/request';
import { ARTICLES_QUERY } from '../tools/queries';

import LayoutDefault from '../layout/LayoutDefault';

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
        <div className="Body">
          <h2>Billin code challeng</h2>
          <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
        </div>
      </LayoutDefault>
    );
  }
}

export default Home;
