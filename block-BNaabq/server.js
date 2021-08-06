var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', (req, res, next) => {
  res.cookie('username', 'bitopan');
  res.end('Welcome to user page');
  next();
});

app.get('/about', (req, res) => {
  res.send('Welcome to node js');
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
