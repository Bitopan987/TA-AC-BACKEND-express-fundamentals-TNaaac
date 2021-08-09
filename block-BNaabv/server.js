var express = require('express');
var app = express();
var logger = require('morgan');
var cookiParser = require('cookie-parser');
app.use(logger('dev'));
app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/admin', (req, res, next) => {
  next('Page Unauthorised');
});

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express</h2>');
});

app.get('/about', (req, res) => {
  res.cookie('name', 'tulshi');
  res.send('My name is qwerty');
});

app.get(`/users/:username`, (req, res) => {
  var username = req.params.username;
  res.send(`<h1>${username}</h1>`);
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.use((req, res) => {
  res.end('Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('Listening to port 3k');
});
