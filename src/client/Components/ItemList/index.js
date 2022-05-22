import React from 'react';
import DietaryTypeList from '../DietaryTypeList';

export default ({className, items, withButton}) => (
  <ul className={className}>
    { items && items.map(item => (
      <li className="item" key={item.id}>
        <h2>{item.name}</h2>
        <DietaryTypeList dietaries={item.dietaries} />
        { withButton && (<button className="remove-item">x</button>)}
      </li>
    ))}
  </ul>
);