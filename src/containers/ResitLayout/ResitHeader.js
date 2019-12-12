import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const ResitHeader = props => {
    const books = props.books
    return (
      <h1>INI HEADER</h1>
    )
  }
  

ResitHeader.propTypes = propTypes;
ResitHeader.defaultProps = defaultProps;

export default ResitHeader;
