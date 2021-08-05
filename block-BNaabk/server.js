var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('Server is listening to port 3k');
});
