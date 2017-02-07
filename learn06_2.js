var fs = require('fs')

module.exports = {
    mymodule: function(dir_name, file_ext, callback) {
        fs.readdir(dir_name, function(err, files) {
            callback(null, files.filter(function(file) {
                return file.endsWith("." + file_ext)
            }))
        })
    }
}

