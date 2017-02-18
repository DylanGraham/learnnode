const http = require('http');
const t2map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    req.pipe(t2map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);
