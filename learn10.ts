const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

let server = net.createServer(socket => {
    const date = strftime('%F %R');
    socket.write(date + "\n");
    socket.end();
});

server.listen(port);
