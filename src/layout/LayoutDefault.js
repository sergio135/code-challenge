import React from 'react';
import PropTypes from 'prop-types';

import Header from '../share/header/Header';
import Footer from '../share/footer/Footer';

const LayoutDefault = props => (
  <div className="LayoutDefault">
    <Header />
    {props.children}
    <Footer />
  </div>
);

LayoutDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutDefault;
