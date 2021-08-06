var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(res.cookie);
  res.cookie('username', 'bitopan');
  next();
});

app.get('/about', (req, res) => {
  res.send('Welcome to node js');
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
