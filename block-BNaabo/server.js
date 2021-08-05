var express = require('express');
var app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.sendFile(__dirname + '/index.html');
});

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.post('/contact', (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
