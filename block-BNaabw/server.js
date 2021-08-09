var express = require('express');
var app = express();
var logger = require('morgan');
var cookiParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookiParser());

// app.use('/admin', (req, res, next) => {
//   next('Page Unauthorised');
// });

//routs
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

// app.get(`/users/:username`, (req, res) => {
//   var username = req.params.username;
//   res.send(`<h1>${username}</h1>`);
// });

//errors

app.use((req, res) => {
  res.end('Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(4000, () => {
  console.log('Listening to port 4k');
});
