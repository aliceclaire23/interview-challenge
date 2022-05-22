import React from 'react';
import DietaryTypeList from '../DietaryTypeList';

export default ({className, withButton}) => (
  <ul className={className}>
    <li className="item">
      <h2>Dummy item</h2>
      <DietaryTypeList />
      { withButton && (<button className="remove-item">x</button>)}
    </li>
  </ul>
);