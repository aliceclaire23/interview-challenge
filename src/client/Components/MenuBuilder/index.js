import React from 'react';
import ItemList from '../ItemList';

export default () => (
  <div className="container menu-builder" data-testid="menu-builder">
    <div className="row">
      <div className="col-4">
        <div className="filters">
          <input className="form-control" placeholder="Name" />
        </div>
        <ItemList className="item-picker" />
      </div>
      <div className="col-8">
        <h2>Menu preview</h2>
        <ItemList className="menu-preview" withButton />
      </div>
    </div>
  </div>
);