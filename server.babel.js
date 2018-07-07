'use strict';

import express from 'express';
import path from 'path';

const app = express();

const port = 3000;
app.use('/', express.static('public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
	console.log("Server Started at port 3000");
});

var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:admin@localhost:5432/irisdb')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })