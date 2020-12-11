const { join } = require('path');
const express = require('express');
const errorHandle = require('./controller/error');

const app = express();

app.set('port', process.env.PORT || 5000);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.join());
app.use(express.static(join(__dirname, '..', 'public')));
app.use('*', errorHandle.error404);
app.use(errorHandle.serverError);
