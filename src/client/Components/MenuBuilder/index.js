import React from 'react';
import ItemList from '../ItemList';

export default ({items, filter, setFilter, selectedItems, selectItem, removeItem}) => (
  <div className="container menu-builder" data-testid="menu-builder">
    <div className="row">
      <div className="col-4">
        <div className="filters">
          <input className="form-control" placeholder="Name" value={filter} onChange={(event) => setFilter(event.target.value)} />
        </div>
        <ItemList className="item-picker" items={items} selectItem={selectItem} />
      </div>
      <div className="col-8">
        <h2>Menu preview</h2>
        <ItemList className="menu-preview" items={selectedItems} removeItem={removeItem} withButton />
      </div>
    </div>
  </div>
);