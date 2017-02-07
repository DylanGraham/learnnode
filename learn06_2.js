var fs = require('fs')

module.exports = function(dir_name, file_ext, callback) {
    fs.readdir(dir_name, function(err, files) {
        if (err) {
            return callback(err)
        }

        callback(null, files.filter(function(file) {
            return file.endsWith("." + file_ext)
        }))
    })
}

