var fs = require('fs')
var ext = process.argv[3]

function file_ext(file) {
    return file.endsWith("." + ext)
}

function print(element) {
    console.log(element)
}

function callback(err, data) {
    var list = data.filter(file_ext)
    list.forEach(print)
}

fs.readdir(process.argv[2], callback)
