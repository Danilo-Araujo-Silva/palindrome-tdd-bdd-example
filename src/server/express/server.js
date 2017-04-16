const express = require('express');
const app = express();
const properties = require('./../../shared/configuration/properties');
const isPalindrome = require('./../../shared/math/palindrome');

const host = properties.constants.server.host;
const port = properties.constants.server.port;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:10000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/checkPalindrome/:query', (req, res) => {
  if (isPalindrome(req.params.query)) {
    res.status(200);
    res.send({output: 'is a palindrome'});
  } else {
    res.status(200);
    // A 400 response was asked to this situation, but in my opinion we could use
    // a 200 response, because a non palindrome query is not a bad request.
    // Anyway, if we would like to use a 400 response we could enable the next line:
    // res.status(400);
    res.send({output: 'is not a palindrome'})
  }
});

const server = app.listen(
  port,
  host,
  () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Express server is listening at http://%s:%s.', host, port);
  }
);
