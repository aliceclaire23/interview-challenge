import React from 'react';
import './App.css';
import MenuBuilder from './Components/MenuBuilder';
import MenuSummary from './Components/MenuSummary';

export default () => (
  <div className="wrapper">
    <MenuSummary />
    <MenuBuilder />
  </div>
);