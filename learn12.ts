const http = require('http');
const t2map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n');
    }

    req.pipe(t2map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);
