// @flow
import React from 'react';
import './style.css';

type Props = {
    title: string
};

/**
 * @param title {string}
 */
export const PageHeader = ({ title } : Props) =>
    <header className="App-header">
      {title}
    </header>;
