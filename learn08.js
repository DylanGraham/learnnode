var Rx = require('rxjs/Rx')
const http = require('http')
const url = process.argv[2]
var count = 0
var storage = ''

// Wrap the http.get method
var get = Rx.Observable.bindCallback(http.get)
var source = get(url)

var sub1 = source.subscribe(
    response => {
        response.setEncoding('utf8')
//        console.log('onNext: %s', response)
        response.on("data", (data) => {
            count += data.length
            storage += data
        })
        response.on('end', () => {
            console.log(count)
            console.log(storage)
        })
    },
    e => console.log('onError: %s', e))
//    () => console.log('onCompleted'));

