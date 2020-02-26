// @flow
import React, { StrictMode } from 'react';
import { PageHeader } from '../components/atoms';
import { PageContent } from '../components/PageContent';
import './style.css';

/**
 * @param title {string}
 */
const App = ({ title } : { title: string }) =>
    <StrictMode>
        <div className="App">
            <PageHeader title={title}/>
            <PageContent/>
        </div>
    </StrictMode>;

export default App;
