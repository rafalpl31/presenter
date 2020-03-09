// @flow
import React, { memo } from 'react';
import './style.css';

type Props = {
    title: string
};

/**
 * @param title {string}
 */
const NonMemoPageHeader = ({ title } : Props) =>
    <header className="App-header">
      {title}
    </header>;

export const PageHeader = memo(NonMemoPageHeader);
