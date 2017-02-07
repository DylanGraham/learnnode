var mymodule = require('./learn06_2')
var dir_name = process.argv[2]
var file_ext = process.argv[3]

function callback(err, data) {
    data.forEach(function(el) {
        console.log(el)
    })
}

mymodule(dir_name, file_ext, callback)

