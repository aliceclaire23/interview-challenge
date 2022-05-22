import axios from 'axios';
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
  
  function removeItem(item) {
    const filteredItems = selectedItems.filter(currentItem => currentItem.id !== item.id);
    setSelectedItems(filteredItems);
  };

  axios.get('/api/items')
       .then(function ({data:{items}}) {
         setItems(items);
        })
        .catch(function (error) {
          // TODO: mock log in tests 
          // console.log(error);
        });

  return (
    <div className="wrapper">
      <MenuSummary />
      <MenuBuilder items={items} selectedItems={selectedItems} selectItem={selectItem} removeItem={removeItem} />
    </div>
  )
};

export default App;