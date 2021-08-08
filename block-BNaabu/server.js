var express = require('express');
var app = express();
app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/admin', (req, res, next) => {
  next('Page Unauthorised');
});

app.get('/user', (req, res) => {
  res.send('User Page');
});

app.use((req, res) => {
  res.end('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log('Listening to port 4k');
});
