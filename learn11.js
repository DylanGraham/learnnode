var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
var server = http.createServer(function (request, response) {
    var stream = fs.createReadStream(file);
    stream.on('data', function (chunk) {
        console.log(chunk);
    });
    stream.on('close', function () {
        console.log("Close");
    });
    response.end();
});
server.listen(port);
