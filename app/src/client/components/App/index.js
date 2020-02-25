import React  from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from '../atoms';
import { PageContent } from '../PageContent';
import './style.css';

/**
 * @param title {string}
 */
const App = ({ title }) =>
    <div className="App">
      <PageHeader title={title}/>
      <PageContent/>
    </div>;

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
