import React, { useState } from 'react';
import './App.css';
import MenuBuilder from './Components/MenuBuilder';
import MenuSummary from './Components/MenuSummary';

const App = () => {
  const [items, setItems] = useState(null);

  fetch("/api/items")
            .then(res =>res.json()
            .then(({items}) => {
                setItems(items)
            }))

  return (
    <div className="wrapper">
      <MenuSummary />
      <MenuBuilder items={items} />
    </div>
  )
};

export default App;