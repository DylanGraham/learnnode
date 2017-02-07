var Rx = require('rxjs/Rx')
const http = require('http')
//const url = process.argv[2] 
var url = 'http://google.com.au/'
var source = Rx.Observable.bindCallback(httpGet(url))

function cb(response) {
    response.setEncoding('utf8')
    response.on("data", (data) => {
        console.log(data)
    })
}


function httpGet(url) {
  return http.get(url, cb)
}

