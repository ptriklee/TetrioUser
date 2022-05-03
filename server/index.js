const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//express.static middleware
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});