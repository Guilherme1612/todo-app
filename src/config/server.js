const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server = express();

server.use(allowCors);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(3333)

module.exports = server;