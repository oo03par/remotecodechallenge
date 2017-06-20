'use strict';

const express = require('express')
const app = express()

let port = 8080;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Application running')
})

module.exports = app // for testing