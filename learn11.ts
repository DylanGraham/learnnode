const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(file);
    stream.on('data', chunk => {
        console.log(chunk);
    });
    stream.on('close', () => {
        console.log("Close");
    });
    response.end();
});

server.listen(port);
