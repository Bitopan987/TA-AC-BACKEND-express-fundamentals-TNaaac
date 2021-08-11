var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//routs
app.get('/', (req, res, next) => {
  var current = new Date();
  console.log(`${req.method}${req.url}${current}`);
  res.send('Same as Morgan');
  next();
});

app.post('/json', (req, res) => {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  setTimeout(() => {
    console.log(req.body, 'post/json');
    res.send(req.body);
  }, 0);

  req.on('end', () => {
    req.body = JSON.parse(store);
    console.log(req.body, 'start');
  });
});

app.listen(5000, () => {
  console.log('Listening to port 5k');
});
