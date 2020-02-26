// @flow
import React, { StrictMode } from 'react';
import { PageHeader } from '../components/atoms';
import { PageContent } from '../components/PageContent';
import './style.css';

type Props = {
    title: string
};

/**
 * @param title {string}
 */
const App = ({ title } : Props) =>
    <StrictMode>
        <div className="App">
            <PageHeader title={title}/>
            <PageContent/>
        </div>
    </StrictMode>;

export default App;
