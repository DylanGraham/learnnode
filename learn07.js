const http = require('http')
const url = process.argv[2] 

function cb(response) {
    response.setEncoding('utf8')
    response.on("data", (data) => {
        console.log(data)
    })
}

http.get(url, cb)

