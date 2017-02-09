var Rx = require('rxjs/Rx')
const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
var storage = ''

// Wrap the http.get method
var get = Rx.Observable.bindCallback(http.get)
var source1 = get(url1)
var source2 = get(url2)
var source3 = get(url3)

var source = Rx.Observable.zip(source1, source2, source3)

var sub1 = source.subscribe(
    response => {
//        console.log('onNext: %s', response)
        response.setEncoding('utf8')
        response.on("data", (data) => {
            storage += data
        })
        response.on('end', () => {
            console.log(storage)
        })
    },
    e => console.log('onError: %s', e))

