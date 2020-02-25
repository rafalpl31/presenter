import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * @param title {string}
 */
export const PageHeader = ({ title }) =>
    <header className="App-header">
      {title}
    </header>;

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
};
