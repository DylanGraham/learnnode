const net = require('net');
const port = process.argv[2];

let server = net.createServer(socket => {
    console.log(socket)
});

server.listen(port);
