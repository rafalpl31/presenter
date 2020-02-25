import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param className {string}
 * @param title {string}
 */
export const Header = ({ className, title }) => {
  const headerProps = className
    ? { className }
    : {};

  return (
    <h2 {...headerProps}>{title}</h2>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
