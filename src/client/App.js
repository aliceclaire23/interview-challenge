import React, { useState } from 'react';
import './App.css';
import MenuBuilder from './Components/MenuBuilder';
import MenuSummary from './Components/MenuSummary';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  function selectItem(item) {
    const currentItems = selectedItems.slice();
    currentItems.push(item);
    setSelectedItems(currentItems);
  };

  fetch("/api/items")
            .then(res =>res.json()
            .then(({items}) => {
                setItems(items)
            }));

  return (
    <div className="wrapper">
      <MenuSummary />
      <MenuBuilder items={items} selectedItems={selectedItems} selectItem={selectItem} />
    </div>
  )
};

export default App;