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
  <div className="jumbotron text-center" style={{marginBottom:"0"}}>
    <p>Footer</p>
  </div>
    )
  }
  

ResitFooter.propTypes = propTypes;
ResitFooter.defaultProps = defaultProps;

export default ResitFooter;
