import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from '../components/atoms';
import { PageContent } from '../components/PageContent';
import './style.css';

/**
 * @param title {string}
 */
const App = ({ title }) =>
    <StrictMode>
        <div className="App">
          <PageHeader title={title}/>
          <PageContent/>
        </div>
    </StrictMode>;

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
