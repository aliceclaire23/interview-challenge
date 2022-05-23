import React from 'react';
import DietaryTypeList from '../DietaryTypeList';

export default ({className, items, selectItem, removeItem, withButton}) => (
  <ul className={className}>
    { items && items.map(item => (
      <li className="item" key={item.id} onClick={() => selectItem && selectItem(item)}>
        <h2>{item.name}</h2>
        <DietaryTypeList dietaries={item.dietaries} />
        { withButton && (<button className="remove-item" onClick={() => removeItem(item)}>x</button>)}
      </li>
    ))}
  </ul>
);
