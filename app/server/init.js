var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

  var content = '';
  var type = '';

  console.log(req.url);

  content = fs.readFileSync(path.join(__dirname, 'content.html'));
  type = 'text/html';

  res.writeHead(200, {'Content-Type': type});
  res.end(content + '\n');
}).listen(80, '0.0.0.0');

console.log('Server running at http://0.0.0.0:80/');
