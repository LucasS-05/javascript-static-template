const path = require('path');

const express = require('express');

const app = new express();
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
