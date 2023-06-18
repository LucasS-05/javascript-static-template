// Importing libraries
const express = require('express');
const { Eta } = require("eta")
const path = require('path');

const app = express();

const eta = new Eta({ views: path.join(__dirname, "src") });

// Sending static files with Express 
app.use(express.static('public'));

// Configure Routes
app.use('/', (req, res) => {
  res.render('home')
});

app.listen(3000, () => {
  console.log('Server is starting at port', 3000);
});
