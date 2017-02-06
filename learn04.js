var fs = require('fs')

function callback (err, data) {
    var list = data.split('\n')
    console.log(list.length - 1)
}

fs.readFile(process.argv[2], 'utf8', callback)

