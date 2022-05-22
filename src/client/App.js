import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import MenuBuilder from './Components/MenuBuilder';
import MenuSummary from './Components/MenuSummary';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState('');

  function selectItem(item) {
    const currentItems = selectedItems.slice();
    currentItems.push(item);
    setSelectedItems(currentItems);
  };
  
  function removeItem(item) {
    const filteredItems = selectedItems.filter(currentItem => currentItem.id !== item.id);
    setSelectedItems(filteredItems);
  };

  axios.get('/api/items', {
    params: {
      filter
    }
  })
  .then(function ({ data }) {
    setItems(data.items);
  })
  .catch(function (error) {
    // TODO: mock log in tests 
    // console.log(error);
  });

  return (
    <div className="wrapper">
      <MenuSummary selectedItems={selectedItems} />
      <MenuBuilder 
        items={items} 
        filter={filter} 
        setFilter={setFilter} 
        selectedItems={selectedItems} 
        selectItem={selectItem} 
        removeItem={removeItem} 
      />
    </div>
  )
};

export default App;