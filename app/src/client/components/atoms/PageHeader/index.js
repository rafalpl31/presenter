// @flow
import React from 'react';
import './style.css';

type PageHeaderType = {
    title: string
};

/**
 * @param title {string}
 */
export const PageHeader = ({ title } : PageHeaderType) =>
    <header className="App-header">
      {title}
    </header>;
