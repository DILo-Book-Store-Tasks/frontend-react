import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const ResitFooter = props => {
    const books = props.books
    return (
      <h1>INI FOOTER</h1>
    )
  }
  

ResitFooter.propTypes = propTypes;
ResitFooter.defaultProps = defaultProps;

export default ResitFooter;
