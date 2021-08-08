var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.get('/users/:asdf', (req, res) => {
  var username = req.params.asdf;
  res.send(username);
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
