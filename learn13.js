var http = require('http');
var url = require('url');
var port = process.argv[2];
var server = http.createServer(function (req, res) {
    var URL = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var date = new Date(URL.query['iso']);
    if (URL.pathname === '/api/parsetime') {
        var json_date = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
        res.write(JSON.stringify(json_date));
        res.end();
    }
    if (URL.pathname === '/api/unixtime') {
        var json_date = {
            "unixtime": date.getTime()
        };
        res.write(JSON.stringify(json_date));
        res.end();
    }
});
server.listen(port);
