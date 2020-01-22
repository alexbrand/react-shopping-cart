const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});


app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
