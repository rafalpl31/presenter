// @flow
import React, { memo } from 'react';
import './style.css';

type Props = {
    title: string
};

/**
 * @param title {string}
 */
export const PageHeader = memo(({ title } : Props) =>
    <header className="App-header">
      {title}
    </header>
);
