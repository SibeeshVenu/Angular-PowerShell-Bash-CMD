var express = require('express');
var app = express();
app.listen(8080);
app.get('/version', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  var spawn = require("child_process").spawn;
  var child = spawn("powershell.exe", ["-Command", req.query.command]);
  child.stdout.on("data", (data) => {
    res.send(data);
    child.stdin.end();
  });
});