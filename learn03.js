var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var list = str.split('\n')

console.log(list.length - 1)

