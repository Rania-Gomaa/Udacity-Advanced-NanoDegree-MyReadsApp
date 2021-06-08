import React from 'react';
import ReactDOM from 'react-dom';
import BooksApp from './containers/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BooksApp />
  </BrowserRouter>,
  document.getElementById('root')
);
