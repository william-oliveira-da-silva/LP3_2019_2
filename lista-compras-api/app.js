const express = require ('express');
const logger = require ('morgan');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const app = express();

app.use(logger('dev'));
app.use(cors());
// Permite que o nosso app Express consiga interpretar dados frontend em formato JSON
app.use(bodyParser.json());


module.exports = app;