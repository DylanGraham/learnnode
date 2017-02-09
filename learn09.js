const Rx = require('rxjs/Rx')
const http = require('http')
const concat = require('concat-stream')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
var count = 0
var storage = []

// Wrap the http.get method
var get = Rx.Observable.bindCallback(http.get)
var source1 = get(url1)
var source2 = get(url2)
var source3 = get(url3)

var source = Rx.Observable.merge(source1, source2, source3)

var sub1 = source.subscribe(
    response => {
        response.setEncoding('utf8')
        response.pipe(concat( (data) => {
            storage[count] = data
            ++count
            if (count === 3) printAll()
        }))
    },
    e => console.log('onError: %s', e))

function printAll(){
    storage.forEach( (data) => {
        console.log(data)
    });
}