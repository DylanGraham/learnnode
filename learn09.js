const Rx = require('rxjs/Rx');
const http = require('http');
const concat = require('concat-stream');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let count = 0;
let storage = [];

// Wrap the http.get method
let get = Rx.Observable.bindCallback(http.get);
let source1 = get(url1);
let source2 = get(url2);
let source3 = get(url3);

let source = Rx.Observable.merge(source1, source2, source3);

let sub1 = source.subscribe(
    response => {
        response.setEncoding('utf8');
        response.pipe(concat((data) => {
            storage[count] = data;
            ++count;
            if (count === 3) printAll()
        }))
    },
    e => console.log('onError: %s', e));

function printAll(){
    storage.forEach( (data) => {
        console.log(data);
    })
}
