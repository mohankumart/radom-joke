const fs = require('fs')

var jokes = {}

jokes.allJokes = () => {
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8')
    var jokesArray = fileContents.split(/\r?\n/)
    return jokesArray
}

module.exports = jokes