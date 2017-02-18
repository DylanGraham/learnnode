const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    const URL = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const date = new Date(URL.query['iso']);

    if (URL.pathname === '/api/parsetime') {
        const json_date = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
        res.write(JSON.stringify(json_date));
        res.end();
    }

    if (URL.pathname === '/api/unixtime') {
        const json_date = {
          "unixtime": date.getTime()
        };
        res.write(JSON.stringify(json_date));
        res.end();
    }
});

server.listen(port);
