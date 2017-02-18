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
        console.log(json_date);
    }

    if (URL.pathname === '/api/unixtime') {
        console.log("UNIX!");
    }
});

server.listen(port);
