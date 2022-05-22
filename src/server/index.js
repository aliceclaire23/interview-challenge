const express = require('express');
const items = require('./items');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', (req, res) => {
  const { filter } = req.query;
  const filteredItems = items.filter(item => item.name.match(new RegExp(filter, 'i')));
  res.send({ items: filteredItems })
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
