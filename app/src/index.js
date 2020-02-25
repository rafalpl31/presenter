import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import { PageTitle } from './config/app';
import './index.css';

const applicationProps = {
  title: PageTitle
};

ReactDOM.render(
  <App {...applicationProps} />,
  document.getElementById('root')
);
