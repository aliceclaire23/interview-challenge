import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import MenuBuilder from './Components/MenuBuilder';
import MenuSummary from './Components/MenuSummary';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState('');

  function selectItem(item) {
    setSelectedItems([...selectedItems, item]);
    
    setItems(items.filter(currentItem => currentItem !== item))
  };
  
  function removeItem(item) {
    const filteredItems = selectedItems.filter(currentItem => currentItem.id !== item.id);
    setSelectedItems(filteredItems);

    setItems([item, ...items]);
  };

  useEffect(() => {
    axios.get('/api/items', {
      params: {
        filter
      }
    })
    .then(function ({ data }) {
      const filteredItems = data.items.filter(item => !selectedItems.some(selected => selected.id === item.id))
      setItems(filteredItems);
    })
    .catch(function (error) {
      // TODO: mock log in tests 
      // console.log(error);
    });
  }, [filter]);

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